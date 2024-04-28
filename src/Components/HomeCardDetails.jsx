import React from 'react';
import {useLoaderData} from 'react-router-dom';

const HomeCardDetails = () => {
    const loader = useLoaderData()
    const {image,item_name,subcategory_name,short_description,price,rating,processing_time} = loader

    console.log(loader)
    return (
        <div className='my-6'>
            <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-56 object-cover object-center" src={image} alt={item_name} />
      <div className="p-4">
        <h2 className="text-gray-800 text-lg font-semibold">{item_name}</h2>
        <p className="mt-2 text-gray-600 text-sm">{subcategory_name}</p>
        <p className="mt-2 text-gray-700">{short_description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-gray-600 text-sm">${price}</span>
          <div className="flex items-center">
            <span className="text-gray-600 text-sm">Rating: {rating}</span>
            <span className="mx-2 text-gray-600 text-sm">|</span>
            <span className="text-gray-600 text-sm">{processing_time}</span>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default HomeCardDetails;