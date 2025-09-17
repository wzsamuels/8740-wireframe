
import type { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Self-Solving Rubik's Cube",
    price: 29.99,
    description: "It solves itself. The fun is in watching it.",
    longDescription: "Tired of the intellectual challenge of a Rubik's Cube? We were too. That's why we invented this version that solves itself the moment you scramble it. Perfect for those who want the satisfaction of a solved cube without any of the effort. Battery not included, because it doesn't need one. It's powered by pure pointlessness.",
    reviews: [
      { id: 1, author: "Lazy Larry", rating: 5, comment: "Finally, a puzzle I can beat!" },
      { id: 2, author: "Confused Carol", rating: 2, comment: "I don't get it. What do I do?" },
    ],
  },
  {
    id: 2,
    name: "Inflatable Dartboard",
    price: 19.95,
    description: "A safer, bouncier way to play darts.",
    longDescription: "The classic pub game, now with 100% less danger and 100% more absurdity. Our inflatable dartboard ensures that every dart, no matter how poorly thrown, will simply bounce off. It's the perfect gift for someone with terrible aim or a deep-seated fear of sharp objects. Darts also inflatable.",
    reviews: [
      { id: 3, author: "Safety Steve", rating: 5, comment: "My walls have never been safer." },
    ],
  },
  {
    id: 3,
    name: "Solar-Powered Flashlight",
    price: 24.50,
    description: "Only works when you don't need it.",
    longDescription: "Harness the power of the sun to light up... the sun. This revolutionary flashlight features a high-efficiency solar panel on top. The catch? It only works when it's in direct sunlight. Perfect for finding your keys in a bright, sunny field, but utterly useless in the dark. Eco-friendly irony at its finest.",
    reviews: [
      { id: 4, author: "Paradox Pete", rating: 4, comment: "It's a brilliant concept, if you think about it. Which I try not to." },
      { id: 5, author: "Disappointed Dave", rating: 1, comment: "Doesn't work in my basement." },
    ],
  },
  {
    id: 4,
    name: "Diet Water",
    price: 9.99,
    description: "Zero calories, zero taste, zero point.",
    longDescription: "It's water, but we put the word 'Diet' on the bottle. This makes it aspirational. Our patented marketing-infused hydration experience contains no artificial sweeteners, no gluten, and no actual benefits over regular tap water. But it costs ten times as much, so it must be better.",
    reviews: [
       { id: 6, author: "Hydration Hank", rating: 3, comment: "Tastes like... water." },
    ],
  },
  {
    id: 5,
    name: "The 'Everything's OK' Alarm",
    price: 35.00,
    description: "Goes off when nothing is wrong.",
    longDescription: "Tired of alarms that only signal disaster? Soothe your anxiety with the 'Everything's OK' Alarm. This device constantly monitors your home for a complete lack of problems. When it confirms that there are no fires, floods, or intruders, it emits a gentle, reassuring beep. Silence means you should probably be worried.",
    reviews: [
        { id: 7, author: "Anxious Annie", rating: 5, comment: "The silence is deafening, but the beeps are bliss." },
        { id: 8, author: "Relaxed Ron", rating: 2, comment: "It went off during my nap. Everything was, in fact, ok." },
    ],
  },
  {
    id: 6,
    name: "Un-ripened Avocado",
    price: 15.00,
    description: "Guaranteed to be rock-hard. Forever.",
    longDescription: "The perfect avocado is a fleeting dream. We've solved that problem by scientifically treating our avocados to never, ever ripen. They will remain in a state of perpetual hardness, perfect for use as a paperweight, a doorstop, or a very confusing weapon. Not for consumption. Seriously.",
    reviews: [
        { id: 9, author: "Millennial Mike", rating: 4, comment: "My toast is safe from smashing, but my window is not." },
    ],
  },
];
