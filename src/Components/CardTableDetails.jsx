// import React,{useParams} from 'react';
import {useLoaderData,useParams} from 'react-router-dom';
import defaultImage from "../../public/dessert_dandroid.png"
import DetailsCard from './DetailsCard';

const CardTableDetails = () => {
    const loader = useLoaderData()
    console.log(loader)
    const {id}=useParams()
//    console.log(id)   
const crafts = loader.find(craft=>craft._id==id)


    return (
        <div>
            {/* details
            {crafts.itemName}
            <img src={image || defaultImage} alt="no image" />
            <h1>{subcategoryName} </h1> */}
            <DetailsCard crafts={crafts} />
        </div>
    );
};

export default CardTableDetails;