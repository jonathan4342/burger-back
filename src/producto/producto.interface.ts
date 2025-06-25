/* eslint-disable prettier/prettier */
export interface Item {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string | null;
}

export interface MenuData {
  adicionales: Item[];
  bebidas: Item[];
  compuesto: Item[];
  papas: Item[];
  salsa: Item[];
}
export type MenuGroup = {
  [key: string]: Item[];
};
