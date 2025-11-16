-- Create inquiries table for contact form submissions
CREATE TABLE IF NOT EXISTS public.inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  school TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_inquiries_email ON public.inquiries(email);

-- Create index on status for filtering
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON public.inquiries(status);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON public.inquiries(created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert inquiries (for public contact form)
CREATE POLICY "Allow public insert on inquiries"
  ON public.inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: Allow authenticated users to read inquiries (for admin dashboard)
CREATE POLICY "Allow authenticated read on inquiries"
  ON public.inquiries
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Allow authenticated users to update inquiries (for status updates)
CREATE POLICY "Allow authenticated update on inquiries"
  ON public.inquiries
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_inquiries_updated_at
  BEFORE UPDATE ON public.inquiries
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Add comment to table
COMMENT ON TABLE public.inquiries IS 'Stores contact form inquiries from the website';

