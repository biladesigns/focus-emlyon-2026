import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Upload, Play, Eye, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Video {
  id: string;
  title: string;
  description: string | null;
  file_path: string;
  thumbnail_url: string | null;
  views: number;
  created_at: string;
}

const Gallery = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploadOpen, setUploadOpen] = useState(false);
  const [playerOpen, setPlayerOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
  const [uploading, setUploading] = useState(false);
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  
  const { toast } = useToast();

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const { data, error } = await supabase
        .from('videos')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setVideos(data || []);
    } catch (error) {
      console.error('Error fetching videos:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les vidéos",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !title) return;

    setUploading(true);
    try {
      // Upload video file
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('videos')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('videos')
        .getPublicUrl(filePath);

      // Insert video metadata
      const { error: insertError } = await supabase
        .from('videos')
        .insert({
          title,
          description,
          file_path: publicUrl,
        });

      if (insertError) throw insertError;

      toast({
        title: "Succès",
        description: "Vidéo uploadée avec succès",
      });

      setUploadOpen(false);
      setTitle("");
      setDescription("");
      setFile(null);
      fetchVideos();
    } catch (error) {
      console.error('Error uploading video:', error);
      toast({
        title: "Erreur",
        description: "Erreur lors de l'upload",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const handlePlayVideo = async (video: Video) => {
    setCurrentVideo(video);
    setPlayerOpen(true);

    // Increment views
    await supabase
      .from('videos')
      .update({ views: video.views + 1 })
      .eq('id', video.id);
  };

  const getVideoUrl = (filePath: string) => {
    return filePath;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-neutral-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-magenta/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue/10 rounded-full blur-[150px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Galerie Vidéo</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Découvrez toutes nos créations audiovisuelles
            </p>
            <Button
              onClick={() => setUploadOpen(true)}
              className="bg-gradient-to-r from-magenta to-orange hover:from-magenta/90 hover:to-orange/90 text-foreground px-8 py-6 text-lg font-bold"
            >
              <Upload className="w-5 h-5 mr-2" />
              Ajouter une vidéo
            </Button>
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-16 container mx-auto px-4">
        {loading ? (
          <div className="text-center text-muted-foreground">Chargement...</div>
        ) : videos.length === 0 ? (
          <div className="text-center text-muted-foreground">
            Aucune vidéo disponible
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <Card
                key={video.id}
                className="bg-card border-2 border-muted hover:border-primary transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => handlePlayVideo(video)}
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-muted flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-magenta to-orange flex items-center justify-center pulse-glow">
                      <Play className="w-10 h-10 text-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <Play className="w-16 h-16 text-muted-foreground/50" />
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  {video.description && (
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {video.description}
                    </p>
                  )}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Eye className="w-4 h-4" />
                    <span>{video.views} vues</span>
                  </div>
                </div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-magenta via-orange to-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* Upload Dialog */}
      <Dialog open={uploadOpen} onOpenChange={setUploadOpen}>
        <DialogContent className="bg-card border-2 border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold gradient-text">
              Ajouter une vidéo
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleUpload} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Titre</label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Titre de la vidéo"
                required
                className="bg-background border-2 border-muted focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description de la vidéo"
                rows={3}
                className="bg-background border-2 border-muted focus:border-primary resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Fichier vidéo</label>
              <Input
                type="file"
                accept="video/mp4,video/quicktime,video/x-msvideo,video/webm"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                required
                className="bg-background border-2 border-muted focus:border-primary"
              />
            </div>
            <Button
              type="submit"
              disabled={uploading}
              className="w-full bg-gradient-to-r from-magenta to-orange hover:from-magenta/90 hover:to-orange/90 text-foreground font-bold py-6"
            >
              {uploading ? "Upload en cours..." : "Uploader"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Video Player Dialog */}
      <Dialog open={playerOpen} onOpenChange={setPlayerOpen}>
        <DialogContent className="bg-card border-2 border-border max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold gradient-text flex justify-between items-center">
              {currentVideo?.title}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setPlayerOpen(false)}
                className="hover:bg-muted"
              >
                <X className="w-5 h-5" />
              </Button>
            </DialogTitle>
          </DialogHeader>
          {currentVideo && (
            <div className="space-y-4">
              <video
                controls
                autoPlay
                className="w-full aspect-video bg-black rounded-lg"
                src={getVideoUrl(currentVideo.file_path)}
              >
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
              {currentVideo.description && (
                <p className="text-muted-foreground">{currentVideo.description}</p>
              )}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Eye className="w-4 h-4" />
                <span>{currentVideo.views} vues</span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
