import React from 'react';
import {Link} from 'react-router-dom';
import defaultImage from "../../public/dessert_dandroid.png"
const CraftTable = ({allCrafts}) => {
    console.log(allCrafts) 
    
    const{image,itemName,subcategoryName,_id,description,price,rating,customization,processingTime,stockStatus,userEmail,userName} = allCrafts
//  console.log(itemName)
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Subcategory</th>
        <th>Customization</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image || defaultImage} alt="no img" />
              </div>
            </div>
            <div>
              <div className="font-bold">{itemName} </div>
              <div className="text-sm opacity-50">{stockStatus} </div>
            </div>
          </div>
        </td>
        <td>
         {subcategoryName}
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>{customization} </td>
        <th>
            <Link to={`/details2/${_id}`}> 
          <button className="btn btn-ghost btn-xs">details</button>
            
            </Link>
        </th>
      </tr>
      {/* row 2 */}

    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default CraftTable;