import React from "react";
import { Link } from "react-router-dom";

const SingleCard = ({ allCrafts }) => {
  const { image, item_name, subcategory_name, price } = allCrafts;

  return (
    <Link to='/allArt' className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={image} alt={item_name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item_name}</div>
        <p className="text-gray-700 text-base">{subcategory_name}</p>
        <p className="text-gray-700 text-base">{price}</p>
      </div>
      <div className="px-6 py-4">
        <Link to={`/details/${allCrafts.id}`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Details
          </button>
        </Link>
      </div>
    </Link>
  );
};

export default SingleCard;
