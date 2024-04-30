import React from "react";
import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCard = ({ myCardItems, setItems, allCrafts }) => {
  const { _id, image, itemName, price, rating, customization, stockStatus } =
    allCrafts;

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Update the state to remove the card instantly
        const updatedItems = myCardItems.filter((item) => item._id !== _id);
        setItems(updatedItems);

        // Make the API call to delete the card
        fetch(`https://backend-server-mu.vercel.app/crafts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Failed to delete card");
            }
            return res.json();
          })
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your data has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting card:", error);
            // If an error occurs, revert the state back to the previous state
            setItems(myCardItems);
            Swal.fire({
              title: "Error!",
              text: "Failed to delete the card.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="rounded-md shadow-md dark:text-white text-gray-800 dark:bg-gray-700">
      <Zoom>
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72"
        />
        <div className="w-full flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{itemName}</h2>
            <p>${price}</p>
            <p>{rating} ★</p>
            <p>{customization}</p>
            <p>{stockStatus}</p>
          </div>
          <div className="">
            <button
              onClick={handleDelete}
              className="btn flex mx-auto text-white tracking-wider text-[1rem] font-bold w-full mb-3 btn-success"
            >
              Delete
            </button>
            <Link to={`/update/${_id}`}>
              <button
                type="button "
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
              >
                Update
              </button>
            </Link>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default MyCard;
