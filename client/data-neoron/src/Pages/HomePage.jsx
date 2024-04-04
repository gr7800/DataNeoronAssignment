import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddProductForm from '../Component/AddProductForm/AddProductForm';
import { addProduct, deleteProduct, getAllProducts, updateProduct } from '../Redux/Product/product.action.js';
import ProductTable from '../Component/ProductTable/ProductTable.js';
import ProductUpdateModal from '../Component/Model/ProductModel.jsx';
import CountModal from '../Component/Model/CountModel.jsx';
import Button from '../Component/common/Button.js';

const HomePage = () => {
  const [data, setData] = useState([])
  const [isOpen, setIsOpen] = useState(false);
  const [isCountModel, setIsCountModel] = useState(false);
  const [initialValues, setInitialValues] = useState({});
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);

  useEffect(() => {
    // Fetch all products when component mounts
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleAddProduct = async (productData) => {
    try {
      // Dispatch action to add product
      await dispatch(addProduct(productData));
      // Show toast message on successful addition of product
      dispatch(getAllProducts());
      toast.success('Product added successfully!');
    } catch (error) {
      // Show toast message on error
      toast.error('Failed to add product!');
    }
  };

  const handleUpdate = async (el) => {
    setIsOpen(true);
    setInitialValues(el);
  }

  const handleProductUpdate = async (el) => {
    try {
      dispatch(updateProduct(initialValues?._id, el)).
        then((res) => {
          toast.success(res?.data?.message);
          dispatch(getAllProducts());
        }).
        catch((err) => {
          console.log(err)
        })

    } catch (error) {
      toast.error('Failed to update Product!');
    }
  }

  const handleDelete = async (el) => {
    try {
      dispatch(deleteProduct(el?._id)).
        then((res) => {
          toast.success(res?.data?.message);
          dispatch(getAllProducts());
        }).
        catch((err) => {
          console.log(err)
        })

    } catch (error) {
      toast.error('Failed to delete Product!');
    }
  }

  useEffect(() => {
    if (products) {
      setData(products);
    }
  }, [products]);

  return (
    <div className="w-full text-center py-4">
      <div>
        <h1 className="text-3xl font-bold mb-4">Welcome to Data Neuron</h1>
      </div>
      <div>
        <AddProductForm onSubmit={handleAddProduct} />
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button onClick={(e)=>setIsCountModel(true)}>
          Api Count details
        </Button>
      </div>
      <div>
        <ProductTable data={data} handleDelete={handleDelete} handleUpdate={handleUpdate} />
      </div>
      <div className="w-full h-full">
        <ProductUpdateModal isOpen={isOpen} onClose={() => setIsOpen(false)} initialValues={initialValues} onSubmit={handleProductUpdate} />
      </div>
      <div>
        <CountModal isOpen={isCountModel} onClose={()=>setIsCountModel(false)} />
      </div>
      <ToastContainer />
    </div>
  );
};

export default HomePage;
