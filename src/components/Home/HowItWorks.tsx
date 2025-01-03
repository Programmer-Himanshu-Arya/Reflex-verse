import React from 'react';
import { Upload, Settings, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Upload your content',
    description: 'Simply upload your raw footage through our secure platform',
    icon: <Upload className="w-8 h-8" />
  },
  {
    number: '02',
    title: 'Our editors get to work!',
    description: 'Professional editors transform your content with precision',
    icon: <Settings className="w-8 h-8" />
  },
  {
    number: '03',
    title: 'Review & accept your videos',
    description: 'Review the final cut and request any adjustments if needed',
    icon: <CheckCircle className="w-8 h-8" />
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-light mb-6">
              HOW IT WORKS
            </h2>
            <p className="text-lg text-forest/80 mb-12">
              Our streamlined process is designed to save you time and hassle, allowing you to focus on what
              matters most while we take care of the video production details
            </p>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="bg-forest-light rounded-lg p-3 text-mint-dark">
                    {step.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-display text-xl font-bold text-mint-dark bg-forest-light px-3 py-1 rounded">
                        {step.number}
                      </span>
                      <h3 className="font-display text-xl font-bold text-forest">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-forest/80">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-forest-light rounded-3xl p-8 relative">
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
              <div className="relative z-10">
                <div className="text-mint-dark text-7xl md:text-8xl font-display font-bold mb-6">REFLEX VERSE</div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-mint-dark mb-4">
                  STUNNING VIDEO SOLUTIONS
                </h3>
                <p className="text-mint/80 text-lg">
                  Let's transform your raw footage into captivating videos with our on-demand editing services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}