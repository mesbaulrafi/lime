import React from 'react'
import Conteinar from '../Conteinar'
import Flex from '../Flex'
import Images from '../Images'
import AppImg1 from '/src/assets/app1.png'
import AppImg2 from '/src/assets/app2.png'
import AppImg3 from '/src/assets/app3.png'
import { Link } from 'react-router-dom'
 
const TheApp = () => {
  return (
   <>
   <div className="bg-[#EEEEEE] pt-19 pb-30">
    <Conteinar>
        <div className="text-center pb-18 ">
            <h5 className='text-[#00B200] text-xl '>The App</h5>
            <h3 className='text-[40px] '>How to Lime</h3>
        </div>
        <Flex className={'gap-x-5'}>
            <Link><Images imgSrc={AppImg1}/></Link>
            <Link><Images imgSrc={AppImg2}/></Link>
            <Link><Images imgSrc={AppImg3}/></Link>
        </Flex>
    </Conteinar>
   </div>
   </>
  )
}

export default TheApp