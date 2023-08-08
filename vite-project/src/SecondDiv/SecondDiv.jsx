import React from 'react'
import "./SecondDiv.css";
import "./SecondDivMed.css";

const SecondDiv = () => {
  return (
    <div className='theseconddiv'>
       <div className='wrapper'>
        <div className='text_cont'>
        <h1 className='takeawaytext'>Let us take you away </h1>
        </div>
        <div className='blurdiv'>
            <div className='whitecurvediv'>
                <div className='one'>
                    <div className='inputdiv'>
                     <input className='inputs' type="text" id="username" name="username" placeholder="Seach for your trip"/>

                    </div>
                </div>
                <div className='two'>
                    <article className='inputdiv2'>
                       <input className='inputs2' type="text" id="username" name="username" placeholder="City"/>
                     </article>
                    <article className='inputdiv2'>
                       <input className='inputs2' type="text" id="username" name="username" placeholder="Depature"/>
                    </article>
                    <article className='inputdiv2'>
                        <input className='inputs2' type="text" id="username" name="username" placeholder="Arrival"/>
                    </article>
                    <article className='search'>
                    <button className='Search-button'>Click Me</button>
                    </article>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SecondDiv