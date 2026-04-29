import React from 'react'
import Header from '../layouts/Header'
import Benner from '../layouts/Benner'
import Vehicles from '../layouts/Vehicles'
import TheApp from '../layouts/TheApp'
import Locations from '../layouts/Locations'
import Principles from '../layouts/Principles'
import Blog from '../layouts/Blog'
import Map from '../layouts/Map'


const Home = () => {
  return (
   <>
   <Benner/>
   <Vehicles/>
   <TheApp/>
   <Locations/>
   <Principles/>
   <Blog/>
   <Map/>
   </>
  )
}

export default Home