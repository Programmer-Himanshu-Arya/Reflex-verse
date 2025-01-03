import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'STARTER',
    price: '$500',
    period: '/month',
    features: ['5 videos per month', '48h delivery', 'Unlimited revisions'],
    highlighted: false
  },
  {
    name: 'ENTERPRISE',
    price: '$1.5K',
    period: '/month',
    features: ['Unlimited videos', '24h delivery', 'Dedicated editor', 'Priority support'],
    highlighted: true
  },
  {
    name: 'GROWTH',
    price: '$1K',
    period: '/month',
    features: ['12 videos per month', '36h delivery', 'Advanced editing'],
    highlighted: false
  }
];

export default function Pricing() {
  return (
    <section className="py-20 bg-forest" id='pricing'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-mint-dark mb-6">
            Pricing
          </h2>
          <p className="text-lg text-mint/80 max-w-2xl mx-auto">
            Experience the difference with our professional video editing services
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 ${
                plan.highlighted
                  ? 'bg-mint-dark text-forest'
                  : 'bg-forest-light text-white border border-mint/20'
              }`}
            >
              <h3 className="font-display text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-sm opacity-80">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="w-5 h-5 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-forest-light text-mint-dark hover:bg-forest-dark'
                    : 'bg-mint-dark text-forest-light hover:bg-mint-dark'
                }`}
              >
                Choose plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}