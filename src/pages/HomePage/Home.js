import React from 'react'
import InfoSection from '../../components/InfoSection/InfoSection'
import { homeObject } from './Data'

const Home = () => {
  return (
    <>
      <InfoSection {...homeObject}/>
    </>
  )
}

export default Home
