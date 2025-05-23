
import { SubCategoryType } from "./SubCategoryTypes";


export interface CategoryType {
  _id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
  subCategories: SubCategoryType[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};