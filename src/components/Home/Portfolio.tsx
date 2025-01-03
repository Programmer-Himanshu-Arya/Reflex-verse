import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { VideoCard } from './VideoCard';

const videos = [
  { url: 'https://videos.pexels.com/video-files/29771421/12792989_2560_1440_30fps.mp4', thumbnail: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=', title: 'Cinematic Edit', category: 'Film' },
  { url: 'https://videos.pexels.com/video-files/29510336/12702792_2730_1440_30fps.mp4', thumbnail: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg', title: 'Commercial Spot', category: 'Advertising' },
  { url: 'https://videos.pexels.com/video-files/29444534/12675285_1920_1080_24fps.mp4', thumbnail: 'https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg', title: 'Music Video', category: 'Music' },
  { url: 'https://videos.pexels.com/video-files/29415859/12666747_2560_1440_60fps.mp4', thumbnail: 'https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg', title: 'Wedding Highlights', category: 'Events' },
  { url: 'https://videos.pexels.com/video-files/15462514/15462514-uhd_2560_1440_30fps.mp4', thumbnail: 'https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg', title: 'Corporate Promo', category: 'Business' },
  { url: 'https://videos.pexels.com/video-files/29222591/12613682_2560_1440_30fps.mp4', thumbnail: 'https://us.123rf.com/450wm/leolintang/leolintang1803/leolintang180300070/96780753-silhouette-d-homme-musulman-levant-la-main-et-priant-dieu-la-nuit.jpg?ver=6', title: 'Travel Montage', category: 'Travel' },
];

const PortfolioSection: React.FC = () => {
  return (
    <section className="bg-forest-light py-16" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-mint-dark mb-6">
            Portfolio
          </h2>
          <p className="text-lg text-mint/80 max-w-2xl mx-auto">
          Showcasing our expertise through successful projects and impactful results for our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <LazyLoadComponent key={index}>
              <VideoCard {...video} />
            </LazyLoadComponent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;


