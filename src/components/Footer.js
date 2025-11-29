import React from 'react';
import logo from '../assets/cloudk8s-logo-transparent.webp';

export default function Footer() {
  return (
    <footer className="border-t border-indigo-200 bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center gap-4">
        <img src={logo} alt="CloudK8s" className="w-28 h-auto" />
        <div className="text-sm text-indigo-700">© 2025 CloudK8s Technology Private Limited. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
