import { create } from "zustand";
import type { Product } from "../model";
import { persist } from "zustand/middleware";

export interface CartProduct extends Product {
  quantity: number;
  discountedPrice: number;
}

export interface CartState {
  cart: CartProduct[];
}

export interface CartActions {
  setCart: (products: CartProduct[]) => void;
}

export const useCartStore = create<CartState & CartActions>()(
  persist(
    (set) => ({
      cart: [],
      setCart: (cart: CartProduct[]) => set({ cart }),
    }),
    {
      name: "cartStorage",
    }
  )
);
