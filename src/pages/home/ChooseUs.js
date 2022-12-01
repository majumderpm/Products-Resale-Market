import React from 'react';
import iconone from '../../assets/icons/service6.png';
import icontwo from '../../assets/icons/service7.png';
import iconthree from '../../assets/icons/service9.png';
import iconfour from '../../assets/icons/service10.png';
import ChooseUsDetails from './ChooseUsDetails';

const ChooseUs = () => {

    const chooseDetailsData = [
        {
            id: 1,
            img: iconone,
            name: 'Fast & Secure Delivery',
        },
        {
            id: 2,
            img: icontwo,
            name: '100% Guarantee On Product',
        },
        {
            id: 3,
            img: iconthree,
            name: '24 Hour Return Policy',
        },
        {
            id: 4,
            img: iconfour,
            name: 'Next Level Pro Quality',
        },
    ]



    return (
        <>
         
        <div className='catagroy bg-base-100 container mx-auto px-8 py-10'>

     
            <h2 className='card-title text-4xl font-medium text-primary text-center block'>Explore our Products</h2>
        <div className='grid gap-4 mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>

        
            {
                chooseDetailsData.map(qulaty => <ChooseUsDetails
                    key={qulaty.id}
                    qulaty={qulaty}
                ></ChooseUsDetails>)
            }
            </div>
            </div>
        </>
    );
};

export default ChooseUs;