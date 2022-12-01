import React from 'react';

const AdminDetails = ({adminUser}) => {

    const { name, catagroy_name, img, date, id, price, color } = adminUser;

    return (
        <>
            {/* <div className="overflow-x-auto w-full"> */}
  
  
 
   
    
      <tr className='bg-slate-100 border border-slate-300'>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          
          </div>
        </td>
        <td>
        <div>
              <div className=" text-sm font-bold text-primary">{catagroy_name}</div>
              <div className="text-sm opacity-50 font-bold text-primary">{name}</div>
            </div>
        </td>
        <td>
          <h5 className='text-sm font-bold text-primary'>{price} </h5>
          
        </td>
        <td>
          <h5 className='text-sm font-bold text-primary'>{date} </h5>
          
        </td>
        <td className='text-sm font-bold text-primary'>{color}</td>
        <th>
          <button className="btn btn-ghost btn-xs text-sm font-bold text-primary">delete</button>
        </th>
      </tr>
     
{/*       
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Yancy Tear</div>
              <div className="text-sm opacity-50">Brazil</div>
            </div>
          </div>
        </td>
        <td>
          Wyman-Ledner
          <br/>
          <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
        </td>
        <td>Indigo</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr> */}
{/*  
 
</div> */}
        </>
    );
};

export default AdminDetails;