import React from 'react'
import "./Services.css";

const Services = () => {
  return (
    <div className='servivesdiv'>
        <div className='servicename'>
            <h2 className='servicetext'>Our Services</h2>
        </div>
        <div className='serviceswrapper'>
            <div className='flightservice'>
                <div className='flightlogo'></div>
                <div className='flightname'>
                    <h2 className='flightcolor'>Flights</h2>
                </div>
                <div className='flightwritingswrapper'>
                <div className='flightwriteOne'>
                    <div className='flightcircleone'></div>
                    <div className='theflightss'>
                    <h3 className='flightactualwords'>Find and book flights to your</h3>
                    <h3 className='flightactualwords'>desired destinations worldwide</h3>
                    </div>
                </div>
                <div className='flightwritetwo'>
                   <div className='flightcircleone'></div>
                    <div className='theflightss2'>
                      <h3 className='flightactualwords'>Choose from a wide selection of </h3>
                       <h3 className='flightactualwords'>airlines, flight classes and</h3>
                       <h3 className='flightactualwords'>flexible travel dates.</h3>
                    </div>

                </div>
                <div className='flightwritethree'>
                    <div className='flightcircleone'></div>
                    <div className='theflightss2'>
                      <h3 className='flightactualwords'>Get the best deals and flexibility</h3>
                       <h3 className='flightactualwords'>that suites your bufget plan</h3>
                    </div>


                </div>
                </div>
            </div>

            <div className='hotelservice'>
                <div className='hotellogo'></div>
                <div className='hotelname'>
                    <h2 className='hotelcolor'>Hotel</h2>
                </div>
                <div className='hotelwritingswrapper'>
                    <div className='hotelwriteOne'>
                        <div className='flightcircleone'></div>
                        <div className='theflightss'>
                           <h3 className='flightactualwords'>Discover a range of hotels from</h3> 
                           <h3 className='flightactualwords'>luxury resorts to budget-friendly</h3> 
                           <h3 className='flightactualwords'>accomodations</h3> 

                        </div>
                    </div>


                    <div className='hotelwritetwo'>
                      <div className='flightcircleone'></div>
                      <div className='theflightss'>
                        <h3 className='flightactualwords'>Filter hotels by location, star</h3> 
                        <h3 className='flightactualwords'>ratings and guest reviews.</h3> 

                      </div>
                    </div>
                    <div className='hotelwritethree'>
                        <div className='flightcircleone'></div>
                        <div className='theflightss'>
                            <h3 className='flightactualwords'>Access to amenities like free WiFi</h3> 
                            <h3 className='flightactualwords'>swimming pools and a 24-hour</h3> 
                            <h3 className='flightactualwords'>room service.</h3> 
                        </div>
                    </div>

                </div>
            </div>


            <div className='carservice'>
                <div className='carlogo'></div>
                <div className='carname'>
                <h2 className='carcolor'>Car</h2>
                </div>
                <div className='carwritingswrapper'>
                    <div className='carwriteOne'>
                       <div className='flightcircleone'></div> 
                       <div className='theflightss'>
                            <h3 className='flightactualwords'>Rent Cars for exploring </h3> 
                            <h3 className='flightactualwords'>destinations at your own pace.</h3> 
                        </div>
                    </div>
                    <div className='carwritetwo'>
                        <div className='flightcircleone'></div>
                        <div className='theflightss'>
                            <h3 className='flightactualwords'>Select from various car types</h3> 
                            <h3 className='flightactualwords'>including sedans, SUVs and</h3> 
                            <h3 className='flightactualwords'>luxury vehicles.</h3> 
                        </div>

                    </div>
                    <div className='carwritethree'>
                         <div className='flightcircleone'></div>
                         <div className='theflightss'>
                            <h3 className='flightactualwords'>Get the best deals and flexibility</h3> 
                            <h3 className='flightactualwords'>that suites your budget plan</h3> 
                        </div>
                    </div>

                </div>
            </div>


            <div className='premiumservice'>
                <div className='premiumlogo'></div>
                <div className='premiumname'> 
                  <h2 className='premiumcolor'>Premium</h2>
                </div>
                <div className='premiumwritingswrapper'>
                    <div className='premiumwriteOne'>
                        <div className='flightcircleone'></div> 
                        <div className='theflightss'>
                            <h3 className='flightactualwords'>Join the premium family and get</h3> 
                            <h3 className='flightactualwords'>value added services like a</h3> 
                            <h3 className='flightactualwords'>budegt planner</h3> 
                        </div>

                     </div>

                        <div className='premiumwritetwo'>
                            <div className='flightcircleone'></div>
                            <div className='theflightss'>
                               <h3 className='flightactualwords'>Create your own personalized</h3> 
                               <h3 className='flightactualwords'>travel packages date and time</h3> 

                            </div>

                        </div>


                        <div className='premiumwritethree'>
                           <div className='flightcircleone'></div>
                           <div className='theflightss'>
                               <h3 className='flightactualwords'>get reminders and info on new</h3> 
                               <h3 className='flightactualwords'>deals and super promotions</h3> 
                               

                           </div>

                        </div>
                        

                    
                </div>
            </div>
        </div>

    </div>
  )
}

export default Services