import { create } from "zustand";
import { User } from "@supabase/supabase-js";

interface StoreState {
  user: User | null;
  setUser: (user: User | null) => void;
  cartCount: number;
  setCartCount: (count: number) => void;
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
}

export const useStore = create<StoreState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  cartCount: 0,
  setCartCount: (count) => set({ cartCount: count }),
  isAdmin: false,
  setIsAdmin: (isAdmin) => set({ isAdmin }),
}));
