import React from 'react';

const DetailsCard = ({ crafts }) => {
    const {
        image,
        itemName,
        subcategoryName,
        _id,
        description,
        price,
        rating,
        customization,
        processingTime,
        stockStatus,
        userEmail,
        userName
    } = crafts;

    return (
        <div className="max-w-md mx-auto my-6 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-48" src={image || 'no image '} alt={itemName} />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{itemName}</div>
                    <p className="mt-2 text-gray-500">{description}</p>
                    <div className="mt-2">
                        <span className="text-gray-400">Price: </span>
                        <span className="font-semibold">{price}</span>
                    </div>
                    <div className="mt-2">
                        <span className="text-gray-400">Rating: </span>
                        <span className="font-semibold">{rating}</span>
                    </div>
                    <div className="mt-2">
                        <span className="text-gray-400">Customization: </span>
                        <span className="font-semibold">{customization}</span>
                    </div>
                    <div className="mt-2">
                        <span className="text-gray-400">Processing Time: </span>
                        <span className="font-semibold">{processingTime}</span>
                    </div>
                    <div className="mt-2">
                        <span className="text-gray-400">Stock Status: </span>
                        <span className="font-semibold">{stockStatus}</span>
                    </div>
                    <div className="mt-2">
                        <span className="text-gray-400">User Email: </span>
                        <span className="font-semibold">{userEmail}</span>
                    </div>
                    <div className="mt-2">
                        <span className="text-gray-400">User Name: </span>
                        <span className="font-semibold">{userName}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;
