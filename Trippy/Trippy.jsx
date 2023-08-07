import React from 'react'
import Header from '../Header/Header'
import SecondDiv from '../vite-project/src/SecondDiv/SecondDiv'
import Category from '../Category/Category'
import CategoImages from '../vite-project/src/CategoImages/CategoImages'
import Attraction from '../vite-project/src/Attraction/Attraction'
import Nature from '../vite-project/src/Nature/Nature'
import Specialoffers from '../vite-project/src/SpecialOffers/Specialoffers'
import Services from '../vite-project/src/Services/Services'
import Thespace from '../vite-project/src/Space/Thespace'
import Footer from '../vite-project/src/Footer/Footer'


const Trippy = () => {
  return (
    <div className='main'>
        <Header/>
         <SecondDiv/>
        <Category/>
        <CategoImages/>
        <Attraction/>
        <Nature/>
        <Specialoffers/>
        <Services/>
        <Thespace/>
        <Footer/>

    </div>
  )
}

export default Trippy