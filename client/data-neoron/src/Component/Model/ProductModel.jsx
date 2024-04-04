import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Input from '../common/Input';
import Button from '../common/Button';

const ProductUpdateModal = ({ isOpen, onClose, onSubmit, initialValues }) => {
    const [updateData, setUpdateData] = useState({});

    const [errors, setErrors] = useState({});

    useEffect(() => {
        setUpdateData(initialValues);
    }, [initialValues])

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation
        const errors = {};
        // Example validation, you can customize this according to your needs
        if (!updateData?.name) {
            errors.name = 'Name is required';
        }
        if (!updateData?.description) {
            errors.description = 'Description is required';
        }
        if (!updateData?.price) {
            errors.price = 'Price is required';
        }
        if (!updateData?.quantity) {
            errors.quantity = 'Quantity is required';
        }
        if (Object.keys(errors).length === 0) {
            // No errors, submit the form
            const { name, description, price, quantity } = updateData
            onSubmit({ name, description, price, quantity });
            // Close the modal
            onClose();
        } else {
            // Set errors
            setErrors(errors);
        }
    };


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="max-w-md mx-auto bg-[#11256d] text-white shadow-md rounded px-8 pt-6 pb-8 my-[10%] text-left"
        >
            <div>
                <h1 className="text-3xl font-bold mb-4 text-center">Update Product!</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Name"
                    placeholder="Please enter name of product!"
                    value={updateData?.name}
                    onChange={(e) => setUpdateData(prev => ({ ...prev, name: e.target.value }))}
                    className="mb-4"
                    error={errors.name}
                />
                <Input
                    label="Description"
                    placeholder="Please enter details of product!"
                    value={updateData?.description}
                    onChange={(e) => setUpdateData(prev => ({ ...prev, description: e.target.value }))}
                    className="mb-4"
                    error={errors.description}
                />
                <Input
                    label="Price"
                    placeholder="Please enter price of product!"
                    value={updateData?.price}
                    onChange={(e) => setUpdateData(prev => ({ ...prev, price: e.target.value }))}
                    className="mb-4"
                    error={errors.price}
                />
                <Input
                    label="Quantity"
                    placeholder="Please enter quantity of product!"
                    value={updateData?.quantity}
                    onChange={(e) => setUpdateData(prev => ({ ...prev, quantity: e.target.value }))}
                    className="mb-4"
                    error={errors.quantity}
                />

                <Button type="submit" className="w-full">
                    Update Product
                </Button>
            </form>
        </Modal>
    );
};

export default ProductUpdateModal;
