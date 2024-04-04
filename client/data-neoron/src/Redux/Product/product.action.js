import * as actionTypes from "./product.type";
import { BaseUrl } from "../../utills/constans";
import axios from "axios";

export const addProduct = (productData) => async (dispatch) => {
  dispatch({ type: actionTypes.ADD_PRODUCT_REQUEST });
  try {
    const response = await axios.post(`${BaseUrl}/add`, productData);
    dispatch({ type: actionTypes.ADD_PRODUCT_SUCCESS, payload: response.data });
    return response
  } catch (error) {
    dispatch({ type: actionTypes.ADD_PRODUCT_ERROR, payload: error.message });
    return error
  }
};

export const updateProduct = (productId, productData) => async (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_PRODUCT_REQUEST });
  try {
    const response = await axios.patch(`${BaseUrl}/update/${productId}`, productData);
    dispatch({ type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: response.data });
    return response
  } catch (error) {
    dispatch({ type: actionTypes.UPDATE_PRODUCT_ERROR, payload: error.message });
    return error
  }
};

export const getAllProducts = () => async (dispatch) => {
  dispatch({ type: actionTypes.GET_ALL_PRODUCTS_REQUEST });
  try {
    const response = await axios.get(`${BaseUrl}/all`);
    if (response?.data?.products) {
      dispatch({ type: actionTypes.GET_ALL_PRODUCTS_SUCCESS, payload: response?.data?.products });
    }else{
      console.log(response)
    }
  } catch (error) {
    dispatch({ type: actionTypes.GET_ALL_PRODUCTS_ERROR, payload: error.message });
  }
};

export const deleteProduct = (productId) => async (dispatch) => {
  console.log(productId)
  dispatch({ type: actionTypes.DELETE_PRODUCT_REQUEST });
  try {
    const res=await axios.delete(`${BaseUrl}/delete/${productId}`);
    dispatch({ type: actionTypes.DELETE_PRODUCT_SUCCESS, payload: { id: productId } });
    return res
  } catch (error) {
    dispatch({ type: actionTypes.DELETE_PRODUCT_ERROR, payload: error.message });
  }
};