/*
# Create bookings table for appointment requests

1. New Tables
- `bookings`
  - `id` (uuid, primary key)
  - `name` (text, not null) — customer's full name
  - `phone` (text, not null) — contact phone number
  - `service` (text, not null) — requested service type (AC repair, washing machine, refrigerator, etc.)
  - `area` (text) — area/neighborhood in Kuwait
  - `message` (text) — additional details from customer
  - `status` (text, default 'new') — booking status: new, contacted, scheduled, completed
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `bookings`.
- Allow anon + authenticated INSERT only (customers submit without signing in).
- No public SELECT/UPDATE/DELETE — booking data is private to the business owner.
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL,
  area text,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_bookings" ON bookings;
CREATE POLICY "anon_insert_bookings" ON bookings FOR INSERT
  TO anon, authenticated WITH CHECK (true);