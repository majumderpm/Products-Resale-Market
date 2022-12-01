import React from "react";

const ChooseUsDetails = ({ qulaty }) => {
  const { name, img, id } = qulaty;
  return (
    <>
      <div className="card card-compact w-full hover:drop-shadow bg-sky-50 py-10 px-6 rounded-none ">
        <figure>
          <img className="w-1/4" src={img} alt="Shoes" />
        </figure>
        <div className="card-body text-center block">
          <h3 className="card-title text-1xl font-bold text-primary block my-2.5">
            {name}
          </h3>          
        </div>
      </div>
    </>
  );
};

export default ChooseUsDetails;
