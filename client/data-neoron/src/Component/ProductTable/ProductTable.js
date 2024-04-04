import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ProductTable = ({ data, handleUpdate, handleDelete }) => {
    return (
        <div className="overflow-x-auto">
            <h2 className="text-2xl font-bold my-4">All Products</h2>
            <table className="table-auto w-full border-collapse">
                <thead className="bg-[#11256d] text-white">
                    <tr>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Description</th>
                        <th className="border px-4 py-2">Price</th>
                        <th className="border px-4 py-2">Quantity</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map(product => (
                        <tr key={product._id}>
                            <td className="border px-4 py-2">{product.name}</td>
                            <td className="border px-4 py-2">{product.description}</td>
                            <td className="border px-4 py-2">{product.price}</td>
                            <td className="border px-4 py-2">{product.quantity}</td>
                            <td className="border px-4 py-2 flex justify-center">
                                <button className="mr-2 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full" onClick={() => handleUpdate(product)}>
                                    <FaEdit />
                                </button>
                                <button className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-full" onClick={()=>handleDelete(product)}>
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
