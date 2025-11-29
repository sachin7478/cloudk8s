import React from 'react';
import TechImg from '../assets/tech-illustration-1.webp';
import logo from '../assets/cloudk8s-logo-transparent.webp';

export default function Hero() {
  return (
    <header className="bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 text-white animate-on-view">
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24 grid gap-8 lg:grid-cols-2 items-center">
        <div>
          <div className="hidden inline-flex items-center gap-3 mb-4">
            <img src={logo} alt="CloudK8s" className="w-36 h-auto" />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Empowering Future Through IT & AI Innovation
          </h1>
          <p className="mt-4 text-indigo-100 max-w-xl text-base">
            Delivering cutting-edge technology services with global expertise. Advancing businesses
            and careers through transformative digital solutions.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-md shadow-lg hover:shadow-xl hover:bg-indigo-50 transition duration-300">Get a Free Consultation</a>
            <a href="#services" className="inline-block px-6 py-3 text-white border-2 border-white rounded-md hover:bg-white/10 transition duration-300 font-semibold">Explore Services</a>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-md p-2 bg-white/10 backdrop-blur-sm rounded-lg shadow-xl">
            <img src={TechImg} alt="Tech & Cloud Illustration" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </header>
  );
}
