import React from 'react'
import { Header, Footer, Banner, Banner1, Product } from '../components/index';
import { client } from '../lib/clients';
const index = ({fetchProducts, fetchBanner}) => {
  return (
    <>
    
        <div className="container">
        <Banner heroBanner={fetchBanner.length && fetchBanner[1]}/>
        </div>
        <div className="box_container">
        {fetchProducts?.map((product)=> <Product
          key= {product._id}
          product={product} 
        />)}
        </div>
        <br/><br/><br/><br/><br/><br/>
        <Banner1 heroBanner={fetchBanner.length && fetchBanner[0]}/>
        <br/><br/><br/>
      
    </>
  );

   
   }
   export const getServerSideProps = async()=> {
    const query= '*[_type == "product"]';
    const fetchProducts= await client.fetch(query);

    const bannerQuery= '*[_type == "banner"]';
    const fetchBanner= await client.fetch(bannerQuery);


    return {
      props: {fetchProducts, fetchBanner}
    }
}

export default index