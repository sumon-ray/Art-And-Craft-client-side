import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
    // Fade,heartBeat,Roll,Fade,Flip,Hinge,JackInTheBox

const SingleCard = ({ allCrafts }) => {
  const { photo, item_name, subcategory_name, price } = allCrafts;

  return (
    
    <div className="w-full  px-2 mb-4">
      <Fade> 
      <Link to="/allArt" className="w-full rounded overflow-hidden shadow-lg bg-gray-200 block">
        <img className="w-full h-full" src={photo} alt={item_name} />
        <div className=" px-4 py-2">
          <div className="font-bold text-lg mb-1">{item_name}</div>
          <p className="text-gray-700 text-base mb-1">{subcategory_name}</p>
          <p className="text-gray-700 text-base">{price}</p>
        </div>
        <div className="px-4 py-2">
          <Link to={`/details/${allCrafts.id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Details
            </button>
          </Link>
        </div>
      </Link>
    </Fade>
    </div>
  );
};

export default SingleCard;
