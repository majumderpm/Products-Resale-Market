import React from 'react';
import useFetchApi from '../../hooks/useFetchApi';
import LatestProducts from './LatestProducts';

const Products = () => {

    const [data] = useFetchApi("./product.json");
    console.log(data.length);

  

    return (
        <>
        <div className='catagroy bg-base-100 container mx-auto px-8 py-10'>

     
            <h2 className='card-title text-4xl font-medium text-primary text-center block mb-8'>Explore our Products</h2>
        <div className='grid gap-4 mt-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
             {/* <h2>Our Latest Catagory</h2> */}
              {data?.map((products) => <LatestProducts 
              products={products}>

              </LatestProducts>)}
        </div>
        </div>
        </>
    );
};

export default Products;