import React from "react";
import { Link } from "react-router-dom";
const MyCard = ({ allCrafts }) => {
  console.log(allCrafts);
  const {
    image,
    itemName,
    subcategoryName,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
  } = allCrafts;

  return (
    <div>
      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{itemName}</h2>
            <p className="dark:text-gray-800">{price}</p>
            <p className="dark:text-gray-800">{rating}</p>
            <p className="dark:text-gray-800">{customization}</p>
            <p className="dark:text-gray-800">{stockStatus}</p>
          </div>
          <Link to={`/update/${allCrafts._id}`}>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
            >
              Update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
