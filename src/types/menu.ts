export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: MenuCategory;
  isPopular?: boolean;
}

export type MenuCategory = 
  | "snacks" 
  | "soups" 
  | "meat" 
  | "fish" 
  | "chicken" 
  | "pasta" 
  | "desserts" 
  | "coffee" 
  | "tea" 
  | "juices" 
  | "cocktails" 
  | "non-alcoholic" 
  | "alcoholic";

export interface MenuSection {
  id: string;
  title: string;
  description?: string;
  dishes: Dish[];
}