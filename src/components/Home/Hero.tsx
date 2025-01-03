import { Play } from 'lucide-react';
import SocialIcons from './SocialIcons';

export default function Hero() {
  return (
    <div className="relative bg-forest-light flex flex-col items-center" id='hero'>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        <div className="text-center">
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            ON-DEMAND
            <span className="block text-mint-dark mt-2">VIDEO EDITING</span>
            <span className="block text-white">SERVICES FOR</span>
            <span className="block text-mint-dark">BRANDS & CREATORS</span>
          </h1>

          <p className="text-lg md:text-xl text-cream/80 mb-8 max-w-3xl mx-auto">
            Work with Professional Video Editors & take your content to the next
            level from as little as $100 per video.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-mint-dark text-forest-light px-8 py-4 rounded-lg hover:bg-mint-dark transition-all duration-300 font-medium flex items-center" onClick={() => {window.location.href = '/form'}}>
              <Play className="w-5 h-5 mr-2" />
              Start Your Project
            </button>
            <SocialIcons />
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-0 left-0 right-0"> */}
      <div className="min-w-full">
        <div className="max-w-5xl mx-auto p-8">
          <div className="relative aspect-video rounded-t-2xl overflow-hidden bg-forest-light border border-mint/20 bg-[url('/Header-img.png')] bg-cover" >
            <div className="max-sm:hidden absolute left-0 top-1/2 -translate-y-1/2 bg-forest-dark/80 backdrop-blur p-3 rounded-r-lg border border-mint/20">
              <div className="space-y-3">
                <div className="w-6 h-6 rounded bg-mint/20"></div>
                <div className="w-6 h-6 rounded bg-mint/20"></div>
                <div className="w-6 h-6 rounded bg-mint/20"></div>
              </div>
            </div>
            <div className="max-sm:hidden absolute right-0 top-1/2 -translate-y-1/2 bg-forest-dark/80 backdrop-blur p-3 rounded-l-lg border border-mint/20">
              <div className="space-y-3">
                <div className="w-6 h-6 rounded bg-mint/20"></div>
                <div className="w-6 h-6 rounded bg-mint/20"></div>
                <div className="w-6 h-6 rounded bg-mint/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}