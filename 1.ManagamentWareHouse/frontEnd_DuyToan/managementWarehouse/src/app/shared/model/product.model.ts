import { Brand } from './brand.class';
import { Category } from './category.model';

export class Product {
  id?: number;
  productName?: string;
  priceProduct?: number;
  quantityProduct?: number;
  category?: Category;
  brand?: Brand;
}
