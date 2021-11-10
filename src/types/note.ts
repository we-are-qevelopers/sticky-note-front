import { Matrix } from '.';

export type Note = {
  id: number;
  content: string;
  position: Matrix;
  size: Matrix;
  // user: ,
  createdAt: string;
  updatedAt: string;
};
