import React from 'react'
import "./Nature.css";
import "./NatureMedia.css";

const Nature = () => {
  return (
    <div className='NatureDiv'>
        <div className='Naturename'>
            <h2 className='Naturetext'>Nature</h2>
            <h3 className='naturesmalltext2'>Over the years, nature has been a good source of tourist attraction. Explore some top picks </h3>
            <h3 className='naturesmalltext3'>from nature's most visited places around the world</h3>
        </div>
        <div className='naturewrapper'>
            <div className='natureone'></div>
            <div className='naturetwo'></div>
            <div className='naturethree'></div>
        </div>
    </div>
  )
}

export default Nature