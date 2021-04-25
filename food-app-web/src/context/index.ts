import { createContext } from 'react';

export type Dish = { id: string; name: string; price: number, image: string, ingredients?: string[], quantity?: number };

export type Order = {
  dishs: Dish[];
  id: string;
  customer: string;
  phone: string;
  dateTime: string;
  table: number;
};

export const GlobalContext = createContext<{
  cart: Dish[];
  setCart: (cart: Dish[]) => void;
  orders: Order[];
  setOrders: (orders: Order[]) => void;
}>({ cart: [], setCart: () => {}, orders: [], setOrders: () => {} });