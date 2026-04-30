import React, { useState, useEffect } from 'react'
import Conteinar from '../Conteinar'
import Images from '../Images'
import Logo from '/src/assets/logo.png'
import UsFlag from '/src/assets/usFlag.png'
import Button from '../Button'
import { Link } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io"
import { IoMdClose } from "react-icons/io"

const navLinks = [
  { label: "About us", path: "/about" },
  { label: "Why Lime", path: "/why-lime" },
  { label: "Vehicles", path: "/vehicles" },
  { label: "Advertise", path: "/advertise" },
  { label: "Blog", path: "/blog" },
  { label: "Help", path: "/help" },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#213724b1] shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <Conteinar>
        <div className='flex items-center justify-between py-[15px]'>

          {/* Left: Logo + Flag */}
          <div className="flex items-center gap-x-6">
            <Link to="/">
              <Images imgSrc={Logo} />
            </Link>
            <Images imgSrc={UsFlag} />
          </div>

          {/* Desktop Nav */}
          <ul className='hidden lg:flex items-center gap-x-7 text-sm'>
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className='hover:opacity-70 transition-opacity duration-300 cursor-pointer text-white'
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Button */}
          <div className='hidden lg:block'>
            <Link to="/download">
              <Button btnText="Download App" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className='lg:hidden focus:outline-none text-white'
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
          </button>

        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className={`lg:hidden px-4 pb-5 rounded-b-xl ${scrolled ? 'bg-[#18231a]' : 'bg-black/90'}`}>
            <ul className='flex flex-col gap-y-4 text-sm pt-3'>
              {navLinks.map((link) => (
                <li key={link.label} className='border-b border-white/10 pb-3'>
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className='hover:opacity-70 transition-opacity cursor-pointer text-white block'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/download" onClick={() => setMenuOpen(false)}>
              <Button className='mt-4 w-full' btnText="Download App" />
            </Link>
          </div>
        )}

      </Conteinar>
    </div>
  )
}

export default Header