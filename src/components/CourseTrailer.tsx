import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MediaItem {
  name: string;
  resource_type: "image" | "video" | string;
  resource_value: string;
  thumbnail_url?: string;
}

interface CourseTrailerProps {
  media?: MediaItem[];
}

export default function CourseTrailer({ media }: CourseTrailerProps) {
  const previewGallery = media?.filter((item) => item.name === "preview_gallery") || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  if (previewGallery.length === 0) return null;

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? previewGallery.length - 1 : prev - 1));

  const handleNext = () =>
    setCurrentIndex((prev) => (prev === previewGallery.length - 1 ? 0 : prev + 1));

  const currentItem = previewGallery[currentIndex];

  return (
    <div className="mt-6 w-full md:w-[400px] relative bg-white p-2">
      {/* Main Media Preview */}
      <div className="w-full h-[200px] md:h-[300px] overflow-hidden relative">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
        >
          <ChevronRight size={20} />
        </button>

        {currentItem.resource_type === "image" ? (
          <img
            src={currentItem.resource_value}
            alt={`media-${currentIndex}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${currentItem.resource_value}`}
            title={`video-${currentIndex}`}
            frameBorder="0"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        )}
      </div>

      {/* Thumbnails */}
      <div className="mt-4 flex space-x-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {previewGallery.map((item, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`flex-shrink-0 cursor-pointer rounded border-2 ${
                isActive ? "border-blue-500" : "border-transparent"
              }`}
              style={{ width: 60, height: 40 }}
            >
              {item.resource_type === "image" ? (
                <img
                  src={item.resource_value}
                  alt={`thumb-${idx}`}
                  className="w-full h-full object-cover rounded"
                />
              ) : (
                <img
                  src={
                    item.thumbnail_url ||
                    `https://img.youtube.com/vi/${item.resource_value}/default.jpg`
                  }
                  alt={`thumb-video-${idx}`}
                  className="w-full h-full object-cover rounded"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
