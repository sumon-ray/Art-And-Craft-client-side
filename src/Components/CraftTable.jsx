import React from 'react';
import { Link } from 'react-router-dom';
import defaultImage from "../../public/dessert_dandroid.png";

const CraftTable = ({ allCrafts }) => {
  console.log(allCrafts)
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Subcategory</th>
                            <th>Customization</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {allCrafts.map((craft, index) => (
                            <tr key={craft._id}>
                                {/* Show the index dynamically */}
                                <td>{index + 1}</td>
                                {/* Render other columns */}
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={craft.image || defaultImage} alt="no img" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{craft.itemName}</div>
                                            <div className="text-sm opacity-50">{craft.stockStatus}</div>
                                        </div>
                                    </div>
                                </td>
                                {/* Render other columns */}
                                <td>
                                    {craft.subcategoryName}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                {/* Render other columns */}
                                <td>{craft.customization}</td>
                                {/* Render other columns */}
                                <td>
                                    <Link to={`/details2/${craft._id}`}>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CraftTable;
