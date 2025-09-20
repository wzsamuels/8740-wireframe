import type { Product } from '../types';
import rubikImage from './assets/rubik.png'
import dartboardImage from './assets/dartboard.png'
import flashlightImage from './assets/flashlight.png'
import dehydratedWaterImage from './assets/dehydratedwater.png'
import bottomlessMugImage from './assets/bottomlessmug.png'
import uselessBoxImage from './assets/uselessbox.png'
import preScrambledEggsImage from './assets/prescrambledeggs.png'
import dietWaterImage from './assets/dietwater.png'
import alarmImage from './assets/alarm.png'
import avocadoImage from './assets/avocado.png'
import silentDogWhistleImage from './assets/silentdogwhistle.png'
import sunglassesImage from './assets/sunglasses.png'
import logoutbuttonImage from './assets/logoutbutton.png'
import earbudCableImage from './assets/earbudcable.png'
import screendoorImage from './assets/screendoor.png'
import shoelaceImage from './assets/shoelace.png'
import solarpannelImage from './assets/solarpanel.png'
import personalraincloudImage from './assets/raincloud.png'

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Self-Solving Rubik's Cube",
    price: 29.99,
    description: "It solves itself. The fun is in watching it.",
    longDescription: "Tired of the intellectual challenge of a Rubik's Cube? We were too. That's why we invented this version that solves itself the moment you scramble it. Perfect for those who want the satisfaction of a solved cube without any of the effort. Battery not included, because it doesn't need one. It's powered by pure pointlessness.",
    image: rubikImage,
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
    image: dartboardImage,
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
    image: flashlightImage,
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
    image: dietWaterImage,
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
    image: alarmImage,
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
    image: avocadoImage,
    reviews: [
        { id: 9, author: "Millennial Mike", rating: 4, comment: "My toast is safe from smashing, but my window is not." },
    ],
  },
  {
    id: 7,
    name: "Dehydrated Water",
    price: 12.99,
    description: "Just add water to rehydrate. Serves one.",
    longDescription: "The pinnacle of convenience. We've taken pure, natural spring water and carefully removed all the moisture. Now you can enjoy the refreshing taste of water anytime, anywhere, just by adding H2O. Each can contains 16oz of premium dehydrated water powder. It's eco-friendly, lightweight, and utterly baffling.",
    image: dehydratedWaterImage,
    reviews: [
      { id: 10, author: "Thirsty Tina", rating: 1, comment: "I followed the instructions but now I just have a can of wet powder." },
    ],
  },
  {
    id: 8,
    name: "Bottomless Mug",
    price: 22.50,
    description: "For the coffee that flows right through you.",
    longDescription: "Do you ever feel like your coffee just isn't moving? The Bottomless Mug solves this problem with its innovative pass-through design. Simply pour your favorite beverage in the top and watch it create a beautiful, artistic puddle on your desk. It's not just a mug; it's a statement about the transient nature of existence. And a mess.",
    image: bottomlessMugImage,
    reviews: [
      { id: 11, author: "Philosopher Phil", rating: 5, comment: "It's a metaphor for my life. 5 stars." },
      { id: 12, author: "Soggy Susan", rating: 1, comment: "My laptop is ruined." },
    ],
  },
  {
    id: 9,
    name: "Useless Box",
    price: 49.99,
    description: "The machine that fights back. Pointlessly.",
    longDescription: "Behold, the Useless Box. It's a sleek wooden box with a single switch. Flip the switch, and a tiny mechanical finger emerges to flip it back off. That's its only purpose. It will win every single time. Why does it exist? Why do any of us? Some questions are best left unanswered.",
    image: uselessBoxImage,
    reviews: [
      { id: 13, author: "Persistent Penny", rating: 4, comment: "I've been at this for three hours. It hasn't given up. I respect that." },
    ],
  },
  {
    id: 10,
    name: "Pre-Scrambled Eggs",
    price: 8.75,
    description: "We do the hard work of whisking for you.",
    longDescription: "Save precious seconds in the morning with our Pre-Scrambled Eggs. We take farm-fresh eggs, crack them into a carton, and give them a good shake. It's the ultimate convenience for those who find the act of whisking to be too strenuous. Note: arrives as a single, homogenous egg-slurry. Good luck separating them.",
    image: preScrambledEggsImage,
    reviews: [
      { id: 14, author: "Busy Barry", rating: 2, comment: "It saved me time, but the delivery guy handed me a dripping box." },
    ],
  },
  {
    id: 11,
    name: "Silent Dog Whistle",
    price: 14.99,
    description: "So silent, even your dog can't hear it.",
    longDescription: "Conventional dog whistles are great, but can you be sure they're working? Our advanced Silent Dog Whistle operates at a frequency so high, it's undetectable by any known species, including your dog. Blow as hard as you like; the silence is the proof of its quality. Is your dog ignoring you? Or is the whistle just *that* good? You'll never know.",
    image: silentDogWhistleImage,
    reviews: [
      { id: 15, author: "Dog-Owner Diane", rating: 3, comment: "My dog Fido completely ignores it. Must be working!" },
    ],
  },
  {
    id: 12,
    name: "Glow-in-the-Dark Sunglasses",
    price: 21.00,
    description: "Look cool in situations where you can't see.",
    longDescription: "Protect your eyes from the sun... at night. These stylish sunglasses feature frames that glow a vibrant green in the dark. The lenses, however, remain completely opaque. They are perfect for night-time espionage, looking cool during a power outage, or simply walking into things in your own hallway.",
    image: sunglassesImage,
    reviews: [
      { id: 16, author: "Nocturnal Ned", rating: 5, comment: "I'm the coolest looking person in this pitch-black cave." },
    ],
  },
  {
    id: 13,
    name: "Wireless Earbud Cable",
    price: 18.00,
    description: "For that classic tangled-wire experience.",
    longDescription: "Do you miss the nostalgia of untangling headphone wires every time you pull them out of your pocket? We've got you covered. This premium, extra-long cable connects your left wireless earbud to your right wireless earbud, bringing back the comforting frustration you've been missing. It's the best of both worlds: wireless charging, wired inconvenience.",
    image: earbudCableImage,
    reviews: [
      { id: 17, author: "Retro Rebecca", rating: 4, comment: "My wireless earbuds feel complete now. And tangled." },
    ],
  },
  {
    id: 14,
    name: "A Single Shoelace",
    price: 7.50,
    description: "Half the laces, half the problems.",
    longDescription: "Why commit to a full pair? This single, high-quality shoelace is perfect for those who live life on the edge, or for anyone who owns a single shoe. Available in left-shoe or right-shoe orientation (they're identical). Buying two is strongly discouraged as it defeats the minimalist purpose.",
    image: shoelaceImage,
    reviews: [
      { id: 18, author: "Minimalist Matt", rating: 5, comment: "I only tie one shoe anyway. This is perfect." },
      { id: 19, author: "Confused Chloe", rating: 2, comment: "Where's the other one?" },
    ],
  },
  {
    id: 15,
    name: "Screen Door for a Submarine",
    price: 1999.99,
    description: "Enjoy that fresh ocean breeze, deep down.",
    longDescription: "Engineered for maximum underwater ventilation, this high-tensile screen door is the must-have accessory for any submarine captain. It allows for a refreshing cross-breeze while keeping out large fish and debris. Disclaimer: Useless Gadgets Inc. is not responsible for any rapid, unscheduled flooding or encounters with giant squid.",
    image: screendoorImage,
    reviews: [
      { id: 20, author: "Captain Carl", rating: 1, comment: "Instructions unclear. Submarine is now an aquarium." },
    ],
  },
  {
    id: 16,
    name: "Battery-Powered Solar Panel",
    price: 55.00,
    description: "Harness the power of batteries to harness the sun.",
    longDescription: "An eco-paradox in a box. This device uses four AA batteries (included) to power a small but powerful LED light, which shines directly onto a tiny, high-efficiency solar panel. The solar panel then generates enough electricity to... make a little green light turn on. It's a self-contained loop of utter pointlessness.",
    image: solarpannelImage,
    reviews: [
      { id: 21, author: "Physics Paul", rating: 2, comment: "My head hurts, but the green light is on, so I guess it works?" },
    ],
  },
  {
    id: 17,
    name: "Personal Rain Cloud",
    price: 75.00,
    description: "For when you're feeling a bit under the weather.",
    longDescription: "Embrace your inner Eeyore with the Personal Rain Cloud. This small, localized weather system hovers about three feet above your head, producing a constant, gentle drizzle. It's perfect for watering a single houseplant, keeping cool on a hot day, or ensuring you always have a gloomy and dramatic entrance.",
    image: personalraincloudImage,
    reviews: [
      { id: 22, author: "Dramatic Dan", rating: 5, comment: "My life has never felt more cinematic. And damp." },
    ],
  },
  {
    id: 18,
    name: "Log-Out Button for Real Life",
    price: 99.99,
    description: "Press it. We dare you.",
    longDescription: "Feeling overwhelmed? Socially exhausted? Need a break from... everything? The Log-Out Button for Real Life offers a one-press solution. What does it do? We're legally not allowed to say. It might do nothing. It might transport you to another dimension. It might just be a big red button in a box. There's only one way to find out. No refunds.",
    image: logoutbuttonImage,
    reviews: [
      { id: 23, author: "Curious Carl", rating: 3, comment: "I pressed it. Woke up in the same room, but my cat was wearing a tiny hat. Not sure if it was the button or if I just need more sleep." },
    ],
  }
];