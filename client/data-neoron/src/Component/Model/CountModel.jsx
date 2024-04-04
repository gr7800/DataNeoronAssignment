import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { BaseUrl } from '../../utills/constans';

const CountModal = ({ isOpen, onClose }) => {
    const [counts, setCounts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/count`); 
                console.log(response)
                setCounts(response?.data?.count[0]);
            } catch (error) {
                console.error('Error fetching count data:', error);
            }
        };
        if (isOpen) {
            fetchData();
        }
    }, [isOpen]);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="max-w-md mx-auto bg-[#11256d] text-white shadow-md rounded px-8 pt-6 pb-8 my-[15%] text-center"
        >
            <h2 className="text-2xl font-bold mb-4 text-center">Api Count Details</h2>
            {counts ? (
                <div>
                    <p>Add Api Count: {counts.addCount}</p>
                    <p>Update Api Count: {counts.updateCount}</p>
                    <p>Delete Api Count: {counts.deleteCount}</p>
                    <p>Total Api Count: {counts.totalCount}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </Modal>
    );
};

export default CountModal;
