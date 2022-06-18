import React from 'react'
import { urlFor } from '../lib/clients'
const Banner = ({ heroBanner }) => {
  return (
    <>
        <div className="banner">
            <div className="bannt">
            <div className="main">{heroBanner.product}</div>
            <div className="disc"><b>{heroBanner.buttonText} <font color="white">TILL    {heroBanner.saleTime}</font></b></div>
            <br/>
            <div className="buy">Grab offer!!</div>
            <br/>
            <font color="grey">
            {heroBanner.desc}
            </font>
            </div>
            <div className="banni"><img src={urlFor(heroBanner.image)}/></div>
        </div>
        <div className="rb1"><img src={urlFor(heroBanner.image)} width="250px" height="200px"/></div>
        <br/>
        <center><b>TOP PRODUCTS</b></center>
        <br/>
    </>
  )
}

export default Banner