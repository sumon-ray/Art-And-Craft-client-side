import MyCard from "../Components/MyCard";
import UseAuth from "../CustomHook/UseAuth";
import { useEffect, useState } from 'react';

const CraftList = () => {
    const [items, setItems] = useState([]);
    const { user } = UseAuth() || {};
console.log(user)
    useEffect(() => {
        // Check if user exists and has an email before fetching data
        if (user && user.email) {
            fetch(`http://localhost:5000/myCrafts/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data) // Check the received data in the console
                    setItems(data);
                })
                .catch(error => {
                    console.error(error);
                    // Handle error gracefully, such as showing a message to the user
                })
        }
        else{
            setItems([])
        }
        return ()=>{
            setItems([])
        }
    }, [user]);

    return (
        <section className='my-6 container mx-auto px-4 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {items.map(item => (
                <MyCard key={item._id} allCrafts={item} />
            ))}
        </section>
    );
};

export default CraftList;
