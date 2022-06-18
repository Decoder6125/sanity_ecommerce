import React from 'react'
import { client, urlFor } from '../../lib/clients';
import { MdShoppingBasket } from "react-icons/md";

import { Product } from '../../components';
const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  return (
    <div>
     <div className="productCon">
       <div className="pimage">
         <div className="iholder">
         <img src={urlFor(image && image[0])} className="product-detail-image" width="100%" height="100%"/>
         </div>
       </div>
       <div className="pdesc">
         <div className="ptitle">{name}</div> <br/><br/>
         <div className="pdetails">{details}</div><br/>
         <p>⭐⭐⭐⭐</p>
         <div className="pprice"><b>₹{price}</b></div><br/><br/>
         <div className="buttons">
           <div className="b1">BUY NOW</div>
           <div className="b2"><MdShoppingBasket/></div>
         </div>
       </div>
       
     </div>
     <br/><br/><br/> <br/><br/><br/><br/><br/><br/> <br/>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product }
  }
}


export default ProductDetails;






