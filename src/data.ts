export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'food' | 'snacks' | 'extra';
  image: string;
  isPopular?: boolean;
}

export const products: Product[] = [
  // Foods
  { id: 'f1', name: 'Asun Pasta', price: 4500, category: 'food', image: '/Asun%20pasta.jpg' },
  { id: 'f2', name: 'Native Pasta', price: 4000, category: 'food', image: '/native%20pasta.jpg' },
  { id: 'f3', name: 'Native Rice', price: 3500, category: 'food', image: '/jellof.jpg' },
  { id: 'f4', name: 'Suya Rice', price: 4000, category: 'food', image: '/jellof.jpg', isPopular: true },
  { id: 'f5', name: 'Moi-moi', price: 1000, category: 'food', image: '/Moi%20moi.jpg' },
  { id: 'f6', name: 'Fried Yam and Egg', price: 3000, category: 'food', image: '/fried%20yam%20and%20egg.jpg' },
  { id: 'f7', name: 'Spaghetti & Chicken', price: 5000, category: 'food', image: '/spag%20chicken.jpg', isPopular: true },
  { id: 'f8', name: 'Coconut Rice', price: 3500, category: 'food', image: '/coconut%20rice.jpg' },
  { id: 'f9', name: 'Asun Jollof Rice', price: 4500, category: 'food', image: '/jellof.jpg', isPopular: true },

  // Snacks
  { id: 's1', name: 'Chin-chin', price: 500, category: 'snacks', image: '/chin%20chin.jpg' },
  { id: 's2', name: 'Peanut', price: 400, category: 'snacks', image: '/peanut.jpg' },
  { id: 's3', name: 'Plantain Chips', price: 500, category: 'snacks', image: '/plantain%20chips.jpg' },
  { id: 's4', name: 'Meat Pie', price: 1000, category: 'snacks', image: '/meat%20pie.jpg', isPopular: true },
  { id: 's5', name: 'Sausage Roll', price: 800, category: 'snacks', image: '/sausage%20roll.jpg' },

  // Extra
  { id: 'e1', name: 'Fruit Salad', price: 2000, category: 'extra', image: '/fruit%20salad.jpg', isPopular: true },
];
