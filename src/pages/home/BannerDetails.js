import React from "react";

const BannerDetails = ({ product }) => {
  const { name, description, img, prev, next, id } = product;
  // console.log(description);

  return (
    <>
      <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className="carousel-img w-full">
          <img src={img} className="" alt="" />
        </div>
        <div className="absolute transform -translate-y-1/2 left-24 top-1/3 w-3/6">
          <h1 className="text-6xl font-medium text-primary" style={{ lineHeight: "73px" }}>{name}</h1>
        </div>
        <div className="absolute transform -translate-y-1/2 left-24 w-3/6 z-10"
          style={{ top: "63%" }}>
          <p className="text-primary font-medium pr-28">{description}</p>
          <button className="btn btn-wide btn-primary font-normal rounded-none"  style={{marginTop: "60px" }}>check out</button>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 w-3/6 left-24"
          style={{ bottom: "30%" }}
        ></div>
        <div className="absolute flex justify-end inset-3/4 inline-grid transform -translate-y-1/2 left-5 right-5 bottom-0 ml-14 z-0">
          <a href={`#slide${prev}`} className="btn btn-circle text-secondary mr-5 w-1  bg-slate-700 text-transparent">
            ❮
           
          </a>
          <a href={`#slide${next}`} className="btn btn-circle text-secondary w-1  bg-slate-700 text-transparent">
            ❯
          </a>
        </div>
      </div>
    </>
  );
};

export default BannerDetails;
