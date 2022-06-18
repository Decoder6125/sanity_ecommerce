import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/clients'
const Product = ({product: {image, name, slug, price}}) => {
  return (
    <>
         
          <div className="card">
            <div class="img"><img src={urlFor(image && image[0])} width="100%" height="100%"/></div>
            <div className="title"><b>{name}</b></div> 
            <div className="rating">⭐⭐⭐⭐⭐</div>
            <div className="price"><b>₹{price}</b></div>
            <center><Link href={`/product/${slug.current}`}><div className="atc">VIEW</div></Link></center>
        

         
           

        </div>
    </>
  )
}

export default Product