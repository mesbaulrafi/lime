import React from 'react'
import Conteinar from '../Conteinar'
import Flex from '../Flex'
import Images from '../Images'
import Logo from '/src/assets/logo.png'
import UsFlag from '/src/assets/usFlag.png'
import Button from '../Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='fixed  w-full'>
    <Conteinar className={""}>
      <Flex className={'justify-between  py-[15px]'}>
        <div className="flex items-center gap-x-10">
          <Images imgSrc={Logo}/>
          <Images className={''} imgSrc={UsFlag}/>
        </div>
        <div className="">
          <ul className='flex items-center gap-x-9 text-white text-sm'>
            <Link><li>About Us</li></Link>
            <Link><li>Why Lime</li></Link>
            <Link><li>Vehicles</li></Link>
            <Link><li>Vehicles</li></Link>
            <Link><li>Vehicles</li></Link>
            <Link><li>Advertise</li></Link>
            <Link><li>Blog</li></Link>
            <Link><li>Help</li></Link>
          </ul>
        </div>
        <Link><Button btnText={"Download App"}/></Link>
      </Flex>
    </Conteinar>
    </div>
  )
}

export default Header