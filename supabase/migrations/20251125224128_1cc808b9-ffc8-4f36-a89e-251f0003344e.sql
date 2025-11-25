-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Authenticated users can upload videos" ON public.videos;
DROP POLICY IF EXISTS "Authenticated users can update videos" ON public.videos;
DROP POLICY IF EXISTS "Authenticated users can delete videos" ON public.videos;

DROP POLICY IF EXISTS "Authenticated users can upload videos" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete videos" ON storage.objects;

-- Allow anyone to insert videos (public upload)
CREATE POLICY "Anyone can upload videos"
ON public.videos
FOR INSERT
WITH CHECK (true);

-- Allow anyone to update videos
CREATE POLICY "Anyone can update videos"
ON public.videos
FOR UPDATE
USING (true);

-- Allow anyone to delete videos
CREATE POLICY "Anyone can delete videos"
ON public.videos
FOR DELETE
USING (true);

-- Allow anyone to upload to videos bucket
CREATE POLICY "Anyone can upload videos to storage"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'videos');

-- Allow anyone to delete from videos bucket
CREATE POLICY "Anyone can delete videos from storage"
ON storage.objects
FOR DELETE
USING (bucket_id = 'videos');