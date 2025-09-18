import { GoogleGenAI } from '@google/genai';

// A simple queue to process image generation requests sequentially to avoid rate limiting.
const requestQueue: (() => Promise<void>)[] = [];
let isProcessing = false;

const processQueue = async () => {
  if (isProcessing || requestQueue.length === 0) {
    return;
  }

  isProcessing = true;
  const task = requestQueue.shift();

  if (task) {
    await task();
    // Gemini's imagen model has a rate limit of 10 requests per minute.
    // Waiting for 7 seconds between requests provides a safe buffer.
    await new Promise(resolve => setTimeout(resolve, 7000));
  }

  isProcessing = false;
  processQueue(); // Process the next item in the queue
};

type AspectRatio = '1:1' | '16:9';

/**
 * Checks localStorage for a cached image. If not found, it adds a generation
 * request to a queue. The queue processes requests one by one with a delay
 * to respect API rate limits.
 * @param cacheKey - The key for localStorage.
 * @param prompt - The prompt to send to the AI.
 * @param aspectRatio - The desired aspect ratio of the image.
 * @param onSuccess - Callback function with the image URL.
 * @param onError - Callback function with an error message.
 */
export const generateAndCacheImage = (
  cacheKey: string,
  prompt: string,
  aspectRatio: AspectRatio,
  onSuccess: (url: string) => void,
  onError: (error: string) => void
): void => {
  try {
    const cachedImage = localStorage.getItem(cacheKey);
    if (cachedImage) {
      onSuccess(cachedImage);
      return;
    }
  } catch (e) {
    console.warn('Could not read from localStorage:', e);
  }

  const generationTask = async () => {
    try {
      // Re-check the cache. Another component might have generated this image
      // while this task was waiting in the queue.
      const cachedImage = localStorage.getItem(cacheKey);
      if (cachedImage) {
        onSuccess(cachedImage);
        return;
      }
      
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const response = await ai.models.generateImages({
        model: 'imagen-4.0-generate-001',
        prompt: prompt,
        config: {
          numberOfImages: 1,
          outputMimeType: 'image/png',
          aspectRatio: aspectRatio,
        },
      });

      if (response.generatedImages && response.generatedImages.length > 0) {
        const base64Image = response.generatedImages[0].image.imageBytes;
        const url = `data:image/png;base64,${base64Image}`;
        try {
          localStorage.setItem(cacheKey, url);
        } catch (e) {
          console.warn('Could not write to localStorage:', e);
        }
        onSuccess(url);
      } else {
        throw new Error('No image was generated.');
      }
    } catch (err) {
      console.error(`Failed to generate image for ${cacheKey}:`, err);
      onError('Could not load image.');
    }
  };

  requestQueue.push(generationTask);
  processQueue();
};
