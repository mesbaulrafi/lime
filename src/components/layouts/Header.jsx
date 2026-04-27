import React, { useState, useEffect } from 'react'
import Conteinar from '../Conteinar'
import Images from '../Images'
import Logo from '/src/assets/logo.png'
import UsFlag from '/src/assets/usFlag.png'
import Button from '../Button'
import { Link } from 'react-router-dom'
// import { Menu } from 'lucide-react'
import { IoMdMenu } from "react-icons/io";

const navLinks = ["About Us", "Why Lime", "Vehicles", "Advertise", "Blog", "Help"]

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
    <div className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#213724b1] shadow-lg' : 'bg-transparent'}`}>
      <Conteinar>
        <div className='flex items-center justify-between py-[15px]'>

          {/* Left: Logo + Flag */}
          <div className="flex items-center gap-x-6">
            <Images imgSrc={Logo} />
            <Images imgSrc={UsFlag} />
          </div>

          {/* Desktop Nav */}
          <ul className='hidden lg:flex items-center gap-x-7 text-sm'>
            {navLinks.map((link) => (
              <Link key={link}>
                <li className={`hover:opacity-70 transition-colors duration-500 cursor-pointer text-white`}>
                  {link}
                </li>
              </Link>
            ))}
          </ul>

          {/* Desktop Button */}
          <div className='hidden lg:block'>
            <Link>
              <Button btnText="Download App" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`lg:hidden focus:outline-none transition-colors duration-500 text-white`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle IoMdMenu"
          >
            <IoMdMenu size={28} />
          </button>

        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className={`lg:hidden px-4 pb-5 rounded-b-xl ${scrolled ? 'bg-[#18231a]' : 'bg-black/90'}`}>
            <ul className='flex flex-col gap-y-4 text-sm pt-3'>
              {navLinks.map((link) => (
                <Link key={link} onClick={() => setMenuOpen(false)}>
                  <li className={`hover:opacity-70 transition-opacity cursor-pointer border-b pb-3 text-white border-white/10`}>
                    {link}
                  </li>
                </Link>
              ))}
            </ul>
            <Link onClick={() => setMenuOpen(false)}>
              <Button className='mt-4 w-full' btnText="Download App" />
            </Link>
          </div>
        )}

      </Conteinar>
    </div>
  )
}

export default Header