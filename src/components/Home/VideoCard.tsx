import { useState } from "react";
import ReactPlayer from "react-player";

interface VideoCardProps {
  url: string;
  title: string;
  category: string;
  thumbnail: string;
}

// const VideoCard: React.FC<VideoCardProps> = ({ url, title, category }) => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   return (
//     <div className="bg-forest-light border border-mint/20 hover:border-mint/40 transition-all duration-300 rounded-lg overflow-hidden shadow-lg">
//       <div className="relative aspect-video">
//         <ReactPlayer
//           url={url}
//           width="100%"
//           height="100%"
//           playing={isPlaying}
//           controls={false}
//         />
//         <button
//           className="absolute bottom-4 right-4 bg-[#0B3B2D] text-[#98FFB3] px-4 py-2 rounded-full font-semibold"
//           onClick={() => setIsPlaying(!isPlaying)}
//         >
//           {isPlaying ? 'Pause' : 'Play'}
//         </button>
//       </div>
//       <div className="p-4">
//         <h3 className="text-[#98FFB3] font-bold text-xl mb-2">{title}</h3>
//         <p className="text-[#98FFB3]">Category: {category}</p>
//       </div>
//     </div>
//   );
// };

// export default VideoCard;

export const VideoCard: React.FC<VideoCardProps> = ({ url, title, category, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="bg-forest-light border border-mint/20 hover:border-mint/40 transition-all duration-300 rounded-lg overflow-hidden shadow-lg">
      <div className="relative aspect-video">
        {!isPlaying && !isLoaded && (
          <img
            src={thumbnail}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {isPlaying && (
          <ReactPlayer
            url={url}
            width="100%"
            height="100%"
            playing={isPlaying}
            controls={true}
            onReady={() => setIsLoaded(true)}
          />
        )}
        { !isPlaying && <button
          className="absolute bottom-4 right-4 bg-[#0B3B2D] text-[#98FFB3] px-4 py-2 rounded-full font-semibold"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {/* {isPlaying ? 'Pause' : 'Play'} */}
          Play
        </button>}
      </div>
      <div className="p-4">
        <h3 className="text-[#98FFB3] font-bold text-xl mb-2">{title}</h3>
        <p className="text-[#98FFB3]">Category: {category}</p>
      </div>
    </div>
  );
};
