import React from 'react'
import { Link } from 'react-router-dom'
import Conteinar from '../Conteinar'

const popularLinks = [
  { label: 'Home', path: '/' },
  { label: 'About us', path: '/about' },
  { label: 'Vehicles', path: '/vehicles' },
  { label: 'Help', path: '/help' },
]

const Error = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center relative overflow-hidden">

      {/* Decorative blobs */}
      <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-[#00c851] opacity-[0.07] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-52 h-52 rounded-full bg-[#00c851] opacity-[0.05] blur-2xl pointer-events-none" />

      <Conteinar>
        <div className="relative z-10 flex flex-col items-center text-center py-24 max-w-lg mx-auto">

          {/* Logo */}
          <div className="flex items-center gap-2 mb-10">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="#00c851" />
              <path d="M10 16c0-3.314 2.686-6 6-6s6 2.686 6 6-2.686 6-6 6-6-2.686-6-6z" fill="#fff" />
            </svg>
            <span className="text-white font-medium text-lg tracking-tight">Lime</span>
          </div>

          {/* 404 */}
          <p className="text-[#00c851] font-medium leading-none mb-3"
            style={{ fontSize: '96px', letterSpacing: '-4px' }}>
            404
          </p>

          <h1 className="text-white text-2xl font-medium mb-3">Page not found</h1>
          <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-sm">
            Looks like this scooter took a wrong turn. The page you're looking for doesn't exist or has been moved.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <Link to="/">
              <button className="bg-[#00c851] hover:bg-[#00b043] text-black font-medium text-sm px-6 py-3 rounded-full transition-colors duration-200">
                Go home
              </button>
            </Link>
            <Link to="/help">
              <button className="bg-transparent text-white border border-white/20 hover:border-white/40 font-medium text-sm px-6 py-3 rounded-full transition-colors duration-200">
                Get help
              </button>
            </Link>
          </div>

          {/* Popular pages */}
          <div className="border-t border-white/10 pt-8 w-full">
            <p className="text-gray-600 text-xs mb-4">Popular pages</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {popularLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-[#00c851] text-xs bg-[#00c851]/10 border border-[#00c851]/20 hover:border-[#00c851]/50 rounded-full px-4 py-1.5 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </Conteinar>
    </div>
  )
}

export default Error