import { createClient } from "@supabase/supabase-js";

export function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    console.warn(
      "Missing Supabase credentials; using dummy client for build time."
    );
    return createClient("http://localhost", "public-anon-key");
  }
  return createClient(url, key);
}