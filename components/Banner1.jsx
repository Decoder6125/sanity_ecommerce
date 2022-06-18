import React from 'react'
import { urlFor } from '../lib/clients'
const Banner1 = ({ heroBanner }) => {
  return (
      <>
    <div className="banner2">
    <div className="bannt1">
            <div class="tt">NEW LAUNCING!!</div>
            <div class="tt"><font color="black">ON {heroBanner.saleTime}</font></div>
            </div>
            <div className="banni1"><img src={urlFor(heroBanner.image)}/></div>
    </div>
    <br/>
    <div className="rb1"><img src={urlFor(heroBanner.image)} width="250px" height="200px"/></div>
    
    </>
  )
}

export default Banner1