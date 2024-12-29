export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          description: string;
          price: number;
          images: string[];
          category_id: string;
          sizes: string[];
          brand: string;
          color: string;
          stock: number;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          description: string;
          price: number;
          images: string[];
          category_id: string;
          sizes?: string[];
          brand: string;
          color: string;
          stock: number;
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          description?: string;
          price?: number;
          images?: string[];
          category_id?: string;
          sizes?: string[];
          brand?: string;
          color?: string;
          stock?: number;
        };
      };
      categories: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          image: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          image: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          image?: string;
        };
      };
      cart_items: {
        Row: {
          id: string;
          created_at: string;
          user_id: string;
          product_id: string;
          quantity: number;
          size: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          user_id: string;
          product_id: string;
          quantity: number;
          size: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          user_id?: string;
          product_id?: string;
          quantity?: number;
          size?: string;
        };
      };
      orders: {
        Row: {
          id: string;
          created_at: string;
          user_id: string;
          status: "pending" | "processing" | "shipped" | "delivered";
          total: number;
        };
        Insert: {
          id?: string;
          created_at?: string;
          user_id: string;
          status?: "pending" | "processing" | "shipped" | "delivered";
          total: number;
        };
        Update: {
          id?: string;
          created_at?: string;
          user_id?: string;
          status?: "pending" | "processing" | "shipped" | "delivered";
          total?: number;
        };
      };
      order_items: {
        Row: {
          id: string;
          created_at: string;
          order_id: string;
          product_id: string;
          quantity: number;
          price: number;
          size: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          order_id: string;
          product_id: string;
          quantity: number;
          price: number;
          size: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          order_id?: string;
          product_id?: string;
          quantity?: number;
          price?: number;
          size?: string;
        };
      };
    };
  };
}
