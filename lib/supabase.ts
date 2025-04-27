const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON ?? "";

import { createBrowserClient } from "@supabase/ssr";

export async function createClient() {
  return createBrowserClient(supabaseUrl, anonKey);
}
