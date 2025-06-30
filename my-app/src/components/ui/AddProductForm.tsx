"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { getSupabaseClient } from "@/lib/supabaseClient";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ProductForm {
  name: string;
  price: string;
  subtitle?: string;
  rating?: string;
}

export default function AddProductForm() {
  const router = useRouter();
  const supabase = getSupabaseClient();
  const [file, setFile] = useState<File | null>(null);
  const form = useForm<ProductForm>({
    defaultValues: {
      name: "",
      price: "",
      subtitle: "",
      rating: "",
    },
  });

  async function onSubmit(data: ProductForm) {
    if (!file) {
      toast.error("Please select an image file.");
      return;
    }

    // 1) Upload image to Supabase Storage
    const fileName = `${Date.now()}_${file.name}`;
    const { error: uploadError } = await supabase
      .storage
      .from("product-images")
      .upload(fileName, file, { cacheControl: "3600", upsert: false });

    if (uploadError) {
      toast.error("Image upload failed: " + uploadError.message);
      return;
    }

    // 2) Get public URL for the uploaded file
    const { data: urlData } = supabase
      .storage
      .from("product-images")
      .getPublicUrl(fileName);

    const imageUrl = urlData.publicUrl;

    // 3) Insert product record with that URL
    const priceNum = parseFloat(data.price);
    const ratingNum = data.rating ? parseFloat(data.rating) : null;

    const { error: insertError } = await supabase
      .from("products")
      .insert({
        name: data.name,
        price: priceNum,
        image_src: imageUrl,
        subtitle: data.subtitle || null,
        rating: ratingNum,
      });

    if (insertError) {
      toast.error("Failed to add product: " + insertError.message);
    } else {
      toast.success("Product added!");
      router.push("/dashboard");
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Name</FormLabel>
                <FormControl>
                  <Input placeholder="Nasi Goreng" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price (AUD)</FormLabel>
                <FormControl>
                  <Input type="number" step="0.01" placeholder="5.99" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subtitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subtitle (optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Location, etc." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rating (0–5, optional)</FormLabel>
                <FormControl>
                  <Input type="number" step="0.1" placeholder="4.5" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* NEW: File Upload */}
          <FormItem>
            <FormLabel>Product Image</FormLabel>
            <FormControl>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </FormControl>
          </FormItem>

          <Button type="submit" className="w-full">
            Add Product
          </Button>
        </form>
      </Form>
    </div>
  );
}
