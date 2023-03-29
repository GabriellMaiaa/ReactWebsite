import React from 'react'
import InfoSection from '../../components/InfoSection/InfoSection'
import { homeObject, homeObjectFour, homeObjectThree, homeObjectTwo } from './Data'

const Home = () => {
  return (
    <>
      <InfoSection {...homeObject}/>
      <InfoSection {...homeObjectTwo}/>
      <InfoSection {...homeObjectThree}/>
      <InfoSection {...homeObjectFour}/>
    </>
  )
}

export default Home
