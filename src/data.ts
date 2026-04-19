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
  { id: 'f1', name: 'Asun Pasta', price: 4500, category: 'food', image: 'https://picsum.photos/seed/asunpasta/400/300' },
  { id: 'f2', name: 'Native Pasta', price: 4000, category: 'food', image: 'https://picsum.photos/seed/nativepasta/400/300' },
  { id: 'f3', name: 'Native Rice', price: 3500, category: 'food', image: 'https://picsum.photos/seed/nativerice/400/300' },
  { id: 'f4', name: 'Suya Rice', price: 4000, category: 'food', image: 'https://picsum.photos/seed/suyarice/400/300', isPopular: true },
  { id: 'f5', name: 'Moi-moi', price: 1000, category: 'food', image: 'https://picsum.photos/seed/moimoi/400/300' },
  { id: 'f6', name: 'Fried Yam and Egg', price: 3000, category: 'food', image: 'https://picsum.photos/seed/yamegg/400/300' },
  { id: 'f7', name: 'Spaghetti & Chicken', price: 5000, category: 'food', image: 'https://picsum.photos/seed/spaghettichicken/400/300', isPopular: true },
  { id: 'f8', name: 'Coconut Rice', price: 3500, category: 'food', image: 'https://picsum.photos/seed/coconutrice/400/300' },
  { id: 'f9', name: 'Asun Jollof Rice', price: 4500, category: 'food', image: 'https://picsum.photos/seed/asunjollof/400/300', isPopular: true },

  // Snacks
  { id: 's1', name: 'Chin-chin', price: 500, category: 'snacks', image: 'https://picsum.photos/seed/chinchin/400/300' },
  { id: 's2', name: 'Peanut', price: 400, category: 'snacks', image: 'https://picsum.photos/seed/peanut/400/300' },
  { id: 's3', name: 'Plantain Chips', price: 500, category: 'snacks', image: 'https://picsum.photos/seed/chips/400/300' },
  { id: 's4', name: 'Meat Pie', price: 1000, category: 'snacks', image: 'https://picsum.photos/seed/meatpie/400/300', isPopular: true },
  { id: 's5', name: 'Sausage Roll', price: 800, category: 'snacks', image: 'https://picsum.photos/seed/sausage/400/300' },

  // Extra
  { id: 'e1', name: 'Fruit Salad', price: 2000, category: 'extra', image: 'https://picsum.photos/seed/fruitsalad/400/300', isPopular: true },
];
