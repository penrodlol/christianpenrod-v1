import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  `https://${process.env.NEXT_PUBLIC_SUPABASE_DOMAIN}`,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
);
