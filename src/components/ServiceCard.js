import React from 'react';

export default function ServiceCard({ icon, title, children }) {
  return (
    <article
      className="bg-gradient-to-br from-white via-indigo-50 to-purple-50 rounded-lg p-6 flex gap-4 items-start transform transition duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 border border-indigo-200 hover:border-purple-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      role="article"
      aria-labelledby={`service-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-md bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
        {icon ?? (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="3" />
          </svg>
        )}
      </div>
      <div>
        <h3 id={`service-${title.replace(/\s+/g, '-').toLowerCase()}`} className="text-lg font-semibold text-indigo-900">{title}</h3>
        <p className="text-sm text-indigo-700 mt-1 leading-relaxed">{children}</p>
      </div>
    </article>
  );
}
