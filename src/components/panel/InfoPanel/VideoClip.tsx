import React from "react";

interface VideoClipProps {
  url: string;
}

const VideoClip: React.FC<VideoClipProps> = ({ url }) => {
  const getEmbedUrl = (url: string) => {
    const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    if (videoIdMatch && videoIdMatch[1]) {
      return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    }
    return ""; 
  };

  const embedUrl = getEmbedUrl(url);

  return (
    <iframe
      src={embedUrl}
      title="YouTube video player"
      className="w-full"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      style={{ border: "none" }}
    ></iframe>
  );
};

export default VideoClip;