import { User } from './user';

export interface Recipe {
  _id: string;
  title: string;
  description: string;
  ingredients: string;
  instructions: string;
  imageUrl: string;
  created_at: string;
  updatedAt: string;
  author: User;
  likes: string[];
}
