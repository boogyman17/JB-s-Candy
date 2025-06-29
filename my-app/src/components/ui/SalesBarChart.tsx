"use client";

import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { supabase } from "@/lib/supabaseClient";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface SalePoint {
  name: string;
  sales: number;
}
interface Order {
  items: Array<{ name: string; qty: number }>;
}

export default function SalesBarChart() {
  const [salesData, setSalesData] = useState<SalePoint[]>([]);

  // Load initial totals
  useEffect(() => {
    supabase
      .from("orders")
      .select("items")
      .then(({ data }) => {
        const tally: Record<string, number> = {};
        (data as Order[] | null)?.forEach((order) =>
          order.items.forEach((it) => {
            tally[it.name] = (tally[it.name] || 0) + it.qty;
          })
        );
        setSalesData(
          Object.entries(tally).map(([name, sales]) => ({ name, sales }))
        );
      });
  }, []);

  // Subscribe to new orders
  useEffect(() => {
    const channel = supabase
      .channel("orders-insert")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "orders" },
        (payload) => {
          const newItems = (payload.new as Order).items;
          setSalesData((prev) => {
            const map = Object.fromEntries(prev.map((d) => [d.name, d.sales]));
            newItems.forEach((it) => {
              map[it.name] = (map[it.name] || 0) + it.qty;
            });
            return Object.entries(map).map(([name, sales]) => ({
              name,
              sales,
            }));
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Prepare chart
  const maxSales = Math.max(0, ...salesData.map((d) => d.sales));
  const data = {
    labels: salesData.map((d) => d.name),
    datasets: [
      {
        label: "Units Sold",
        data: salesData.map((d) => d.sales),
        backgroundColor: salesData.map((d) =>
          d.sales === maxSales
            ? "rgba(34,197,94,0.8)"
            : "rgba(59,130,246,0.6)"
        ),
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    indexAxis: "x",            
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      title: { display: true, text: "Top-Selling Products" },
    },
    scales: {
      x: {
        beginAtZero: true,      
      },
    },
  };

  return <Bar data={data} options={options} />;
}
