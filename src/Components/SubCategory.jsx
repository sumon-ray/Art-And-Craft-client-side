import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const SubCategory = () => {
  const [subcategories, setSubcategories] = useState([]);
  // Slide,heartBeat,Roll,Slide,Flip,Hinge,JackInTheBox

  useEffect(() => {
    fetch("https://backend-server-mu.vercel.app/subcategory")
      .then((response) => response.json())
      .then((data) => setSubcategories(data))
      .catch((error) => console.error("Error fetching subcategories:", error));
  }, []);

  return (
    <div className="container max-w-full mx-auto px-0  py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-full">
        <Fade>
          {subcategories.map((subcategory) => (
            <Link
              key={subcategory._id}
              to={`/allCard/${subcategory.subcategory_Name}`}
              className="flex flex-col rounded-md shadow-md bg-gray-200 text-black  w-full"
            >
              <img
                src={subcategory.image}
                alt=""
                className=" object-cover object-center w-full rounded-t-md h-full"
              />
              <div className="p-4">
                <span className="block text-xs font-medium tracking-widest uppercase text-violet-400">
                  {subcategory.subcategory_Name}
                </span>
                <h2 className="text-xl font-semibold tracking-wide mt-2 mb-4">
                  {subcategory.description}
                </h2>
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold tracking-wide">
                    {subcategory.rating}
                  </h2>
                  <h2 className="text-lg font-semibold tracking-wide">
                    {subcategory.price}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default SubCategory;
