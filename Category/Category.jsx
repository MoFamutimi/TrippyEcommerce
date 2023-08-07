import React from 'react'
import "./Category.css";

const Category = () => {
  return (
    <div className='categorydiv'>
        <div className='categoryname'>
            <h1 className='continentname'>Continental Category</h1>
        </div>
        <div className='countries'>
            <ul>
                <li className='different'>Africa</li>
                <li>Europe</li>
                <li>Asia</li>
                <li>North/South America</li>
            </ul>
        </div>

    </div>
  )
}

export default Category