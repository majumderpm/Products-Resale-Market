import React from "react";

const LatestProducts = ({ products }) => {
  const { name, catagroy_name, img, total, id, } = products;
  console.log(catagroy_name);

  return (
    <>



      <div className="card card-compact w-full hover:drop-shadow bg-white py-10 px-6 border rounded-none">
        <figure>
          <img className="w-6/12" src={img} alt="Shoes" />
        </figure>
        <div className="card-body text-center block">
          <h3 className="card-title text-1xl font-bold text-primary block my-2.5">{catagroy_name}</h3>
          <h4 className="text-1xl font-bold text-primary">{name}</h4>
          <p className="text-1xl font-bold text-primary">{total}</p>
          <div className="card-actions justify-center my-2.5">
          <button className="btn btn-outline-block text-primary hover:text-white w-full mt-10 rounded-none">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestProducts;
