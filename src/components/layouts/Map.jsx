import React from 'react'
import Conteinar from '../Conteinar'
import Images from '../Images'
import MapImg from '/src/assets/map.png'
import AppStor from '/src/assets/appstor.png'
import PlayStor from '/src/assets/playstor.png'




const Map = () => {
  return (
   <>
   <div className="py-25 bg-[#1A1A1A]">
    <Conteinar>
        <div className="lg:flex justify-around">
            {/* Map */}
            <div className="">
                <Images imgSrc={MapImg}/>
            </div>
            {/* Play Stor */}
            <div className="pt-85">
                <h4 className='font-poppins text-[40px] text-white'>Download the App</h4>
                <div className="lg:flex py-10">
                    <Images imgSrc={AppStor} className={'w-[150px h-[70px] pb-5'}/>
                    <Images imgSrc={PlayStor} className={'w-[180px] h-[50px] lg:pl-5 '}/>
                </div>
            </div>
        </div>
    </Conteinar>
   </div>
   </>
  )
}

export default Map