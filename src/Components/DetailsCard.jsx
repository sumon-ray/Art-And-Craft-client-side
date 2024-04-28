import React from 'react';

const DetailsCard = ({crafts}) => {
const{image,itemName,subcategoryName,_id,description,price,rating,customization,processingTime,stockStatus,userEmail,userName} = crafts
console.log(crafts)
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>
        <th></th> 
        <th>name</th> 
        <img src={image} alt="" />
        <th>Job</th> 
        <th>company</th> 
        <th>location</th> 
        <th>Last Login</th> 
        <th>Favorite Color</th>
      </tr>
    </thead> 
    <tbody>
      <tr>
        <th>1</th> 
        <td>{itemName}  </td> 
        <td>Quality Control Specialist</td> 
        <td>Littel, Schaden and Vandervort</td> 
        <td>Canada</td> 
        <td>12/16/2020</td> 
        <td>Blue</td>
      </tr>
  
      
    </tbody> 
    <tfoot>
      <tr>
        <th></th> 
        <th>Name</th> 
        <th>Job</th> 
        <th>company</th> 
        <th>location</th> 
        <th>Last Login</th> 
        <th>Favorite Color</th>
      </tr>
    </tfoot>
  </table>
</div>
        </div>
    );
};

export default DetailsCard;