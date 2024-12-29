import { supabase } from "./supabase";
import { Database } from "../types/supabase";

export const fetchProducts = async () => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};

export const fetchCategories = async () => {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("name");

  if (error) throw error;
  return data;
};

export const fetchCartItems = async (userId: string) => {
  const { data, error } = await supabase
    .from("cart_items")
    .select(
      `
      *,
      products (*)
    `,
    )
    .eq("user_id", userId);

  if (error) throw error;
  return data;
};

export const addToCart = async ({
  userId,
  productId,
  quantity,
  size,
}: {
  userId: string;
  productId: string;
  quantity: number;
  size: string;
}) => {
  const { data, error } = await supabase
    .from("cart_items")
    .insert({
      user_id: userId,
      product_id: productId,
      quantity,
      size,
    })
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updateCartItem = async ({
  id,
  quantity,
}: {
  id: string;
  quantity: number;
}) => {
  const { data, error } = await supabase
    .from("cart_items")
    .update({ quantity })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const removeFromCart = async (id: string) => {
  const { error } = await supabase.from("cart_items").delete().eq("id", id);

  if (error) throw error;
};

export const createOrder = async ({
  userId,
  items,
  total,
}: {
  userId: string;
  items: Array<{
    productId: string;
    quantity: number;
    price: number;
    size: string;
  }>;
  total: number;
}) => {
  const { data: order, error: orderError } = await supabase
    .from("orders")
    .insert({
      user_id: userId,
      total,
      status: "pending",
    })
    .select()
    .single();

  if (orderError) throw orderError;

  const orderItems = items.map((item) => ({
    order_id: order.id,
    product_id: item.productId,
    quantity: item.quantity,
    price: item.price,
    size: item.size,
  }));

  const { error: itemsError } = await supabase
    .from("order_items")
    .insert(orderItems);

  if (itemsError) throw itemsError;

  return order;
};

export const fetchOrders = async (userId: string) => {
  const { data, error } = await supabase
    .from("orders")
    .select(
      `
      *,
      order_items (*, products (*))
    `,
    )
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};
