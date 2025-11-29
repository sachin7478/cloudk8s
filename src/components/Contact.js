import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-12 animate-on-view">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-lg shadow-2xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold">Get in touch</h3>
        <p className="mt-2 text-indigo-100 text-base">Reach out for a free consultation — tell us about your project.</p>
        <div className="mt-6">
          <a href="mailto:hello@cloudk8s.example" className="inline-block px-6 py-3 bg-white text-purple-600 font-bold rounded-md hover:text-pink-600 transition duration-300 shadow-lg hover:shadow-xl">Email Us</a>
        </div>
      </div>
    </section>
  );
}
