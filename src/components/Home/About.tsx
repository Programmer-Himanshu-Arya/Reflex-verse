import React from 'react';
import { Award, Users, Clock, Video } from 'lucide-react';

const stats = [
  { icon: <Video />, value: "500+", label: "Projects Completed" },
  { icon: <Users />, value: "100+", label: "Happy Clients" },
  { icon: <Award />, value: "15+", label: "Industry Awards" },
  { icon: <Clock />, value: "8", label: "Years Experience" }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Studio</h2>
            <p className="text-lg text-gray-600 mb-6">
              We are a passionate team of video editors, motion designers, and creative professionals dedicated to turning your raw footage into compelling stories that captivate your audience.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              With over 8 years of experience in the industry, we've worked with brands, creators, and businesses of all sizes to create content that stands out and delivers results.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-indigo-600 flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              alt="Our team at work"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white p-6 rounded-lg">
              <p className="text-lg font-semibold">Ready to start your project?</p>
              <button className="mt-4 bg-white text-indigo-600 px-6 py-2 rounded-md hover:bg-indigo-50">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}