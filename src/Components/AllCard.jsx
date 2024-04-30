import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const AllCard = () => {
  const { id } = useParams();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(`https://backend-server-mu.vercel.app/craftsByCategory/${id}`)
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) =>
        console.error("Error fetching cards by category:", error)
      );
  }, [id]);

  return (
    <div className="container mx-auto px-4 lg:px-24 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {cards.map((card) => (
          <div
            key={card._id}
            className="relative bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={card?.image}
              alt={card.itemName}
              className="w-full h-64 object-cover object-center"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-60 transition-opacity duration-300">
              <div className="flex flex-col justify-center items-center h-full text-white">
                <h2 className="text-xl font-semibold mb-2">{card.itemName}</h2>
                <p className="text-sm mb-4">{card.subcategoryName}</p>
                <div className="flex justify-between w-3/4">
                  <div>
                    <p className="text-lg font-bold">${card.price}</p>
                    <p className="text-sm">{card.rating} ★</p>
                  </div>
                  <p className="text-sm">
                    Processing Time: {card.processingTime} days
                  </p>
                </div>
              </div>
            </div>
            <Link
              to={`/details2/${card._id}`}
              className="absolute inset-0 flex justify-center items-center bg-transparent hover:bg-primary-600 dark:hover:bg-primary-700 transition duration-300"
            >
              <span className="text-white font-semibold">View Details</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCard;
