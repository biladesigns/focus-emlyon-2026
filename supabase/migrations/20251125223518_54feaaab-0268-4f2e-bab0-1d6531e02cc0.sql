-- Create videos bucket for storing video files
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'videos',
  'videos',
  true,
  524288000, -- 500MB limit
  ARRAY['video/mp4', 'video/quicktime', 'video/x-msvideo', 'video/webm']
);

-- Create videos table to store video metadata
CREATE TABLE public.videos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  file_path TEXT NOT NULL,
  thumbnail_url TEXT,
  duration INTEGER, -- Duration in seconds
  views INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.videos ENABLE ROW LEVEL SECURITY;

-- Allow everyone to view videos (public gallery)
CREATE POLICY "Videos are viewable by everyone"
ON public.videos
FOR SELECT
USING (true);

-- Allow authenticated users to insert videos
CREATE POLICY "Authenticated users can upload videos"
ON public.videos
FOR INSERT
WITH CHECK (auth.role() = 'authenticated');

-- Allow authenticated users to update their own videos
CREATE POLICY "Authenticated users can update videos"
ON public.videos
FOR UPDATE
USING (auth.role() = 'authenticated');

-- Allow authenticated users to delete videos
CREATE POLICY "Authenticated users can delete videos"
ON public.videos
FOR DELETE
USING (auth.role() = 'authenticated');

-- Create storage policies for videos bucket
CREATE POLICY "Videos are publicly accessible"
ON storage.objects
FOR SELECT
USING (bucket_id = 'videos');

CREATE POLICY "Authenticated users can upload videos"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'videos'
  AND auth.role() = 'authenticated'
);

CREATE POLICY "Authenticated users can delete videos"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'videos'
  AND auth.role() = 'authenticated'
);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_videos_updated_at
BEFORE UPDATE ON public.videos
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for faster queries
CREATE INDEX idx_videos_created_at ON public.videos(created_at DESC);