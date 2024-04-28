import React,{useState} from 'react';
import { useLoaderData } from "react-router-dom";
import CraftTable from '../Components/CraftTable';

const CraftItems = () => {
    const loader = useLoaderData()
    console.log(loader)
    const [crafts,setCrafts]=useState(loader)
    console.log(crafts)
    return (
        <section className='container mx-auto px-4 lg:px-24 my-6'>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5">
        {
                crafts.map(item=>{
                    // console.log(item)
               return (
              <CraftTable key={item._id} allCrafts={item} />
               )
                })
            }
        </div>
        </section>
       
    );
};

export default CraftItems;