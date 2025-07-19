import {Image} from './image';

export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  inventory: number;
  description: string;
  category: Category;
  image: Image[];
}
