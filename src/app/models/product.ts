import {Image} from './image';
import {Category} from './category';

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
