// src/app/orders/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabaseClient";

interface Order {
  id: string;
  items: { name: string; price: number; qty: number }[];
  created_at: string;
}

export default function OrdersPage() {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!user) return;
    supabase
      .from("orders")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .then(({ data, error }) => {
        if (error) console.error(error);
        else setOrders(data as Order[]);
      });
  }, [user]);

  if (!user) return <p className="p-8">Please log in to see your orders.</p>;

  return (
    <main className="max-w-3xl mx-auto py-12 px-4 space-y-8">
      <h1 className="text-2xl font-bold">Your Orders</h1>
      {orders.length === 0 && <p>No orders yet.</p>}
      {orders.map((order) => (
        <div key={order.id} className="border p-4 rounded-lg">
          <p className="text-sm text-gray-500">
            {new Date(order.created_at).toLocaleString()}
          </p>
          <ul className="mt-2 space-y-2">
            {order.items.map((it, i) => (
              <li key={i} className="flex justify-between">
                <span>{it.name} ×{it.qty}</span>
                <span>${(it.price * it.qty).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}
