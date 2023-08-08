import React from 'react'
import "./Speacialoffers.css";
import "./SpecialoffersMed.css";

const Specialoffers = () => {
  return (
    <div className='specialOfferdiv'>
        <div className='specialOffernames'>
            <h2 className='specialtext'>Special Offers</h2>
            <h3 className='specialsmalltext'>Some special offers that are handpicked for you</h3>
        </div>
        <div className='specialofferwrapper'>
            <div className='specialImgone'></div>
            <div className='specialImgtwo'></div>
            <div className='specialImgthree'></div>
            <div className='specialImgfour'></div>
        </div>

    </div>
  )
}

export default Specialoffers