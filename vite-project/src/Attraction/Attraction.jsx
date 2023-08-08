import React from 'react'
import "./Attraction.css";
import "./AttractionMed.css";

const Attraction = () => {
  return (
    <div className='Attractiondiv'>
        <div className='attractionname'>
            <h2 className='famoustext'>Famous Attractions</h2>
            <h3 className='famoussmalltext'>Take a look at famous site from around the world</h3>
            </div>

            <div className='attractionwrapper'>
               <div className='attraction_One'></div>
               <div className='attraction_two'></div>
               <div className='attraction_three'></div>
            </div>
        </div>
    
  )
}

export default Attraction