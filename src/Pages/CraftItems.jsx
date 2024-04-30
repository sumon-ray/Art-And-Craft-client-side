import React, { useState } from 'react';
import { useLoaderData } from "react-router-dom";
import CraftTable from '../Components/CraftTable';

const CraftItems = () => {
    const loader = useLoaderData();
    const [crafts] = useState(loader);

    return (
        <section className='container mx-auto px-4 lg:px-24 my-6'>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5">
                {/* Pass the entire crafts array and the index as props */}
                <CraftTable allCrafts={crafts} />
            </div>
        </section>
    );
};

export default CraftItems;
