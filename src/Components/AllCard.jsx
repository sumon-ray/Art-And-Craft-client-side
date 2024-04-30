import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const AllCard = () => {
  const { id } = useParams();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/craftsByCategory/${id}`)
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) =>
        console.error("Error fetching cards by category:", error)
      );
  }, [id]);

  return (
    <div className="container mx-auto px-4 lg:px-24 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card._id}
            className="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={card?.image}
              alt={card.itemName}
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h2 className="text-gray-800 dark:text-white text-xl font-semibold mb-2">
                {card.itemName}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {card.subcategoryName}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                {card.short_description}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  ${card.price}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {card.rating}{" "}
                  <span className="text-gray-500 dark:text-gray-400">★</span>
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Processing Time: {card.processingTime} days
              </p>
              <Link
                to={`/details2/${card._id}`}
                className="block mt-4 text-center bg-primary-600 dark:bg-primary-700 text-white py-2 px-4 rounded-lg hover:bg-primary-700 dark:hover:bg-primary-800 transition duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCard;
