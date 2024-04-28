import React from 'react';
import {useLoaderData} from 'react-router-dom';
import SingleCard from './SingleCard';

const CraftCards = () => {
    const loader = useLoaderData()
    // console.log(loader)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-6'>
            {
                loader.map(data=>{
                return ( <article key={data.key}>
                     <div className="my-6 flex ">
                         <SingleCard allCrafts={data} />
                     </div>
                    </article>)
                })
            }
        </div>
    );
};

export default CraftCards;

// dui jaigai loader dite hbe mane parent kew data link provide korte hbe 