import React from 'react';
import VideoCard from './VideoCard.tsx';

const videos = [
  { url: 'https://videos.pexels.com/video-files/29771421/12792989_2560_1440_30fps.mp4', title: 'Cinematic Edit', category: 'Film' },
  { url: 'https://videos.pexels.com/video-files/29510336/12702792_2730_1440_30fps.mp4', title: 'Commercial Spot', category: 'Advertising' },
  { url: 'https://videos.pexels.com/video-files/29444534/12675285_1920_1080_24fps.mp4', title: 'Music Video', category: 'Music' },
  { url: 'https://videos.pexels.com/video-files/29415859/12666747_2560_1440_60fps.mp4', title: 'Wedding Highlights', category: 'Events' },
  { url: 'https://videos.pexels.com/video-files/15462514/15462514-uhd_2560_1440_30fps.mp4', title: 'Corporate Promo', category: 'Business' },
  { url: 'https://videos.pexels.com/video-files/29222591/12613682_2560_1440_30fps.mp4', title: 'Travel Montage', category: 'Travel' },
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, est!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

