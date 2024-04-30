import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SubCategory = () => {
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/subcategory")
      .then((response) => response.json())
      .then((data) => setSubcategories(data))
      .catch((error) => console.error("Error fetching subcategories:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {subcategories.map((subcategory) => (
        <Link
          to={`/allCard/${subcategory.subcategory_Name}`}
          key={subcategory._id}
          className="max-w-xs p-6 rounded-md shadow-md bg-gray-900 text-gray-50"
        >
          <img
            src={subcategory.image}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase text-violet-400">
              {subcategory.subcategory_Name}
            </span>
            <h2 className="text-xl font-semibold tracking-wide">
              {subcategory.rating}
            </h2>
            <h2 className="text-xl font-semibold tracking-wide">
              {subcategory.price}
            </h2>
            <h2 className="text-xl font-semibold tracking-wide">
              {subcategory.description}
            </h2>
          </div>
          <p className="text-gray-100"></p>
        </Link>
      ))}
    </div>
  );
};

export default SubCategory;
