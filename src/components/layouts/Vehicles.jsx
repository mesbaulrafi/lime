import React from 'react'
import Conteinar from '../Conteinar'
import Flex from '../Flex'
import Images from '../Images'
import Bike1 from '/src/assets/eBike1.png'
import Bike2 from '/src/assets/eBike2.png'
import { Link } from 'react-router-dom'

const Vehicles = () => {
  return (
    <div className='py-20 '>
    <Conteinar>
        <div className="text-center pb-18 ">
            <h5 className='text-[#00B200] text-xl '>Our Vehicles</h5>
            <h3 className='text-[40px] '>Discover the Gen4</h3>
        </div>
        <Flex className={'justify-center gap-x-5 '}>
            <Link to={''}><Images imgSrc={Bike1}/></Link>
            <Link to={''}><Images imgSrc={Bike2}/></Link>
            
        </Flex>
    </Conteinar>
    </div>
  )
}

export default Vehicles