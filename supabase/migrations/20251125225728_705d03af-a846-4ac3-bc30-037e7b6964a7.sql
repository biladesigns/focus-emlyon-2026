-- Drop the videos table
DROP TABLE IF EXISTS public.videos CASCADE;

-- Delete all objects from the videos bucket first
DELETE FROM storage.objects WHERE bucket_id = 'videos';

-- Now remove the storage bucket for videos
DELETE FROM storage.buckets WHERE id = 'videos';