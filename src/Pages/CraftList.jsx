import { useEffect, useState } from "react";
import MyCard from "../Components/MyCard";
import UseAuth from "../CustomHook/UseAuth";

const CraftList = () => {
  const [items, setItems] = useState([]);
  const { user } = UseAuth() || {};
  useEffect(() => {
    // Check if user exists and has an email before fetching data
    if (user && user.email) {
      fetch(`https://backend-server-mu.vercel.app/myCrafts/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data) // Check the received data in the console
          setItems(data);
        })
        .catch((error) => {
          console.error(error);
          // Handle error gracefully, such as showing a message to the user
        });
    } else {
      setItems([]);
    }
    return () => {
      setItems([]);
    };
  }, [user]);
  // https://backend-server-mu.vercel.app/crafts
  return (
    <section className="my-6 w-full container mx-auto px-4 lg:px-24 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <MyCard
          key={item._id}
          myCardItems={items}
          setItems={setItems}
          allCrafts={item}
        />
      ))}
    </section>
  );
};

export default CraftList;
