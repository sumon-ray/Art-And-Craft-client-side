import React from "react";
import { useLoaderData } from "react-router-dom";

const ArtAndCraftCategories = () => {
  const loader = useLoaderData();
  console.log(loader);
  //   const [subcategories, setSubcategories] = useState([]);
  //   useEffect(() => {
  //     fetch('http://localhost:5000/subcategories')
  //       .then(response => response.json())
  //       .then(data => setSubcategories(data))
  //       .catch(error => console.error('Error fetching subcategories:', error));
  //   }, []);

  return (
    <div>
      <h2>Art & Craft Categories</h2>
      {loader.length}
      {loader.map((item) => {
        return (
          <div className="" key={item._id}>
            <img src={item.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default ArtAndCraftCategories;
