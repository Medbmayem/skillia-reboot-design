
-- Create contact_messages table
CREATE TABLE contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  firstname TEXT NOT NULL,
  lastname TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  country TEXT NOT NULL,
  company TEXT NOT NULL,
  industry TEXT NOT NULL,
  function TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts for anonymous users
CREATE POLICY "Anyone can insert contact messages" ON contact_messages
FOR INSERT TO anon
WITH CHECK (true);
