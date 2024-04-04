import React, { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

const AddProductForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        const errors = {};
        if (!name.trim()) {
            errors.name = "Name is required";
        }
        if (!description.trim()) {
            errors.description = "Description is required";
        }
        if (!price.trim()) {
            errors.price = "Price is required";
        } else if (isNaN(price)) {
            errors.price = "Price must be a number";
        }
        if (!quantity.trim()) {
            errors.quantity = "Quantity is required";
        } else if (isNaN(quantity)) {
            errors.quantity = "Quantity must be a number";
        }
        if (Object.keys(errors).length === 0) {
            onSubmit({ name, description, price, quantity });
            setName('');
            setDescription('');
            setPrice('');
            setQuantity('');
        } else {
            setErrors(errors);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-[#11256d] text-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left">
            <Input label="Name" placeholder={"Please enter name of product!"} value={name} onChange={(e) => setName(e.target.value)} className="mb-4" error={errors.name} />
            <Input label="Description" placeholder={"Please enter details of product!"} value={description} onChange={(e) => setDescription(e.target.value)} className="mb-4" error={errors.description} />
            <Input label="Price" placeholder={"Please enter price of product!"} value={price} onChange={(e) => setPrice(e.target.value)} className="mb-4" error={errors.price} />
            <Input label="Quantity" placeholder={"Please enter quantity of product!"} value={quantity} onChange={(e) => setQuantity(e.target.value)} className="mb-4" error={errors.quantity} />
            <Button type="submit" className="w-full">Add Product</Button>
        </form>
    );
};

export default AddProductForm;
