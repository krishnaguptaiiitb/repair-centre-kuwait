import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type BookingInput = {
  name: string;
  phone: string;
  service: string;
  area?: string;
  message?: string;
};

export async function submitBooking(input: BookingInput) {
  const { data, error } = await supabase
    .from('bookings')
    .insert({
      name: input.name,
      phone: input.phone,
      service: input.service,
      area: input.area ?? null,
      message: input.message ?? null,
    })
    .select('id')
    .maybeSingle();

  if (error) throw error;
  return data;
}
