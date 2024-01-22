import axios from "axios";

const BASE_URL = 'https://audiophile-backend-alx9.onrender.com/products';

export const getAllProducts = () => {
    return axios.get(BASE_URL);
};

export const getProductsByCategory = (category) => {
    return axios.get(`${BASE_URL}/categories/${category}`);
};

export const getProductBySlug = (slug) => {
    return axios.get(`${BASE_URL}/${slug}`);
};