
export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  longDescription: string;
  image?: string;
  reviews: Review[];
}

export interface CartItem extends Product {
  quantity: number;
}

export enum Page {
  Home,
  Product,
  Cart,
  Checkout,
  SearchResults,
}
