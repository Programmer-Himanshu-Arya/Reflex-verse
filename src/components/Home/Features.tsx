import React from 'react';
import { Zap, Clock, Sparkles, RefreshCw, Shield, Headphones } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Fast Turnaround',
    description: 'Get your edited videos back in as little as 24 hours'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: '24/7 Service',
    description: 'Round-the-clock support and editing services'
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Professional Quality',
    description: 'Expert editors with years of industry experience'
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: 'Unlimited Revisions',
    description: 'Well revise until youre 100% satisfied'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Secure Platform',
    description: 'Your content is safe with our encrypted storage'
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: 'Dedicated Support',
    description: 'Personal account manager for enterprise clients'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-forest-light" id='features'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-mint-dark mb-6">
            WHY CHOOSE REFLEX VERSE?
          </h2>
          <p className="text-lg text-mint/80 max-w-2xl mx-auto">
            Experience the difference with our professional video editing services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-forest-light border border-mint/20 rounded-xl p-6 hover:border-mint/40 transition-all duration-300"
            >
              <div className="text-mint-dark mb-4">
                {feature.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-mint-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-mint/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}