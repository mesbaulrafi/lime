import React from 'react'
import Header from '../layouts/Header'
import Benner from '../layouts/Benner'
import Vehicles from '../layouts/Vehicles'
import TheApp from '../layouts/TheApp'
import Locations from '../layouts/Locations'


const Home = () => {
  return (
   <>
   <Benner/>
   <Vehicles/>
   <TheApp/>
   <Locations/>
   </>
  )
}

export default Home