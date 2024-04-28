import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { UserContext } from "../AuthProvider/AuthProvider";

const AddCraftItem = () => {
  const loader = useLoaderData();
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
    userEmail,
    userName,

  } = loader;
  const { user } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const image = form.image.value;
    const itemName = form.itemName.value;
    const subcategoryName = form.subcategoryName.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;
    const email = user.email;
    const info = {
      image,
      itemName,
      subcategoryName,
      description,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
      userEmail,
      userName,
      email,
      _id: loader._id, // Assuming you have an _id property in the loader object
    };
console.log(info)
    fetch(`http://localhost:5000/crafts/${loader._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      })
      
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount>0) {
            alert('done')
          Swal.fire({
            text: "Data added successfully!",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="container mx-auto px-4 lg:px-24 my-6">
      <div className="bg-zinc-200 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Add Craft Item
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="image" className="block text-gray-700">
              Image URL:
            </label>
            <input
              type="text"
              id="image"
              name="image"
              defaultValue={image}
              className="mt-1 p-2 w-full  input text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="itemName" className="block text-gray-700">
              Item Name:
            </label>
            <input
              type="text"
              id="itemName"
              name="itemName"
              defaultValue={itemName}
              className="mt-1 p-2 w-full input text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="subcategoryName" className="block text-gray-700">
              Subcategory Name:
            </label>
            <input
              type="text"
              id="subcategoryName"
              name="subcategoryName"
              defaultValue={subcategoryName}
              className="mt-1 p-2 w-full input text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-gray-700">
              Short Description:
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={description}
              className="mt-1 p-2 w-full input text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="price" className="block text-gray-700">
                Price:
              </label>
              <input
                type="number"
                id="price"
                name="price"
                defaultValue={price}
                className="mt-1 input text-black p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="rating" className="block text-gray-700">
                Rating:
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                defaultValue={rating}
                step="0.1"
                min="0"
                max="5"
                className="mt-1 input text-black p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="customization" className="block text-gray-700">
                Customization:
              </label>
              <select
                id="customization"
                name="customization"
                defaultValue={customization}
                className="mt-1 p-2 input text-black w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div>
              <label htmlFor="processingTime" className="block text-gray-700">
                Processing Time:
              </label>
              <input
                type="text"
                id="processingTime"
                name="processingTime"
                defaultValue={processingTime}
                className="mt-1 p-2 w-full input text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="stockStatus" className="block text-gray-700">
                Stock Status:
              </label>
              <select
                id="stockStatus"
                name="stockStatus"
                defaultValue={stockStatus}
                className="mt-1 input text-black p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              >
                <option value="inStock">In Stock</option>
                <option value="madeToOrder">Made to Order</option>
              </select>
            </div>
            <div>
              <label htmlFor="userEmail" className="block text-gray-700">
                User Email:
              </label>
              <input
                type="email"
                id="userEmail"
                name="userEmail"
                defaultValue={userEmail}
                className="mt-1 input text-black p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="userName" className="block text-gray-700">
              User Name:
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={userName}
              className="mt-1 p-2 input text-black w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCraftItem;
