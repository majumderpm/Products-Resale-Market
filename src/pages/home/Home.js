import React from 'react';
import Admin from '../admin/Admin';
// import Brand from '../catagory/Brand';
import Banner from './Banner';
import ChooseUs from './ChooseUs';
// import LatestProducts from './LatestProducts';
import Products from './Products';
// import Products from './Products';



const Home = () => {
    
    return (
        <>
            <div className='text-primary'>
               <Banner></Banner>
              {/* <LatestProducts></LatestProducts> */}
              <Products></Products>
              <ChooseUs></ChooseUs>
              {/* <Brand></Brand> */}
              
            </div>
        </>
    );
};

export default Home;