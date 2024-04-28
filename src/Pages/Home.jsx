import React, { useContext } from 'react';
import { UserContext } from '../AuthProvider/AuthProvider';
import Banner from '../Components/Banner';
import CraftCards from '../Components/CraftCards';

const Home = () => {
    const { user } = useContext(UserContext);
    // console.log(user)
    return (
        <div className='container mx-auto px-4 lg:px-24 my-6'>
           <Banner />
           <CraftCards />
        </div>
    );
};

export default Home;
