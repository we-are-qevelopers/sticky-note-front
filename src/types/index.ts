export type Matrix = {
  x: number;
  y: number;
};

export type Vertex = {
  topLeft: Matrix;
  topRight: Matrix;
  bottomLeft: Matrix;
  bottomRight: Matrix;
};
