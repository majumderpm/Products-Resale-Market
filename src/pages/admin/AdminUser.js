import React from "react";
import useFetchApi from "../../hooks/useFetchApi";
import AdminDetails from "./AdminDetails";
import user from '../../assets/images/user.jpg';

const AdminUser = () => {
  // const AminDetailsData = [
  //     {
  //         id: 1,
  //         img: productOne,
  //         name: 'Roco Wireless Headphone',
  //         description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus maiores obcaecati sequi error similique, saepe odio, voluptas libero possimus necessitatibus quidem quisquam animi, doloribus quo facilis. In explicabo nisi sequi commodi dolorem impedit ratione suscipit repellat corporis quas velit ut, eos officiis quis provident, hic voluptatum aspernatur eligendi maxime praesentium.',
  //         prev:3,
  //         next:2

  //     },
  //     {
  //         id: 2,
  //         img: productTwo,
  //         name: 'Smart Digital Watch',
  //         description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus maiores obcaecati sequi error similique, saepe odio, voluptas libero possimus necessitatibus quidem quisquam animi, doloribus quo facilis. In explicabo nisi sequi commodi dolorem impedit ratione suscipit repellat corporis quas velit ut, eos officiis quis provident, hic voluptatum aspernatur eligendi maxime praesentium. ',
  //         prev:1,
  //         next:3

  //     },
  //     {
  //         id: 3,
  //         img: productThree,
  //         name: 'Enhance Your Music Experience',
  //         description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus maiores obcaecati sequi error similique, saepe odio, voluptas libero possimus necessitatibus quidem quisquam animi, doloribus quo facilis. In explicabo nisi sequi commodi dolorem impedit ratione suscipit repellat corporis quas velit ut, eos officiis quis provident, hic voluptatum aspernatur eligendi maxime praesentium. ',
  //         prev:2,
  //         next:1
  //     },
  // ]
  const [data] = useFetchApi("./adminProduct.json");
  console.log(data.length);

  return (
    <>


    



      <div className="deshbord bg-base-100 container mx-auto px-8 py-10">
       
        <div className="flex justify-around">
        <div className="admin_deshbord w-3/12 bg-slate-100 px-14 py-8 drop-shadow rounded-md mr-10">
           <div className="userImg w-full rounded-full drop-shadow text-center" style={{ margin: "auto" }} >
            <img src={user} alt="user" className="mb-8"/>
            <h5 className="text-2xl font-bold text-primary">user Name</h5>
            <h6 className="text-1xl font-bold text-primary">sub title</h6>
           </div>
        </div>
        <div className="table_row overflow-x-auto w-9/12">
        <table className="table table-compact w-full ">
        <thead>
      <tr>
        <th>
        </th>
        <th></th>
        <th>Name</th>
        <th>Price</th>
        <th>Color</th>
        <th>date</th>
        <th></th>
      </tr>
    </thead>
          {data?.map((adminUser) => (
            <AdminDetails adminUser={adminUser}></AdminDetails>
          ))}
          </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminUser;
