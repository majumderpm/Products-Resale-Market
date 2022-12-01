import React from 'react';
import productOne from '../../assets/images/product-1.jpg';
import productTwo from '../../assets/images/product-2.jpg';
import productThree from '../../assets/images/product-3.jpg';
import BannerDetails from './BannerDetails';


const Banner = () => {

    const bannerDetailsData = [
        {
            id: 1,
            img: productOne,
            name: 'Roco Wireless Headphone',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus maiores obcaecati sequi error similique, saepe odio, voluptas libero possimus necessitatibus quidem quisquam animi, doloribus quo facilis. In explicabo nisi sequi commodi dolorem impedit ratione suscipit repellat corporis quas velit ut, eos officiis quis provident, hic voluptatum aspernatur eligendi maxime praesentium.',
            prev:3,
            next:2

        },
        {
            id: 2,
            img: productTwo,
            name: 'Smart Digital Watch',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus maiores obcaecati sequi error similique, saepe odio, voluptas libero possimus necessitatibus quidem quisquam animi, doloribus quo facilis. In explicabo nisi sequi commodi dolorem impedit ratione suscipit repellat corporis quas velit ut, eos officiis quis provident, hic voluptatum aspernatur eligendi maxime praesentium. ',
            prev:1,
            next:3

        },
        {
            id: 3,
            img: productThree,
            name: 'Enhance Your Music Experience',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus maiores obcaecati sequi error similique, saepe odio, voluptas libero possimus necessitatibus quidem quisquam animi, doloribus quo facilis. In explicabo nisi sequi commodi dolorem impedit ratione suscipit repellat corporis quas velit ut, eos officiis quis provident, hic voluptatum aspernatur eligendi maxime praesentium. ',
            prev:2,
            next:1
        },
    ]

    return (
        <div className="carousel w-full">
            {
                bannerDetailsData.map(product => <BannerDetails
                    key={product.id}
                    product={product}
                ></BannerDetails>)
            }
        </div>
    );
};

export default Banner;