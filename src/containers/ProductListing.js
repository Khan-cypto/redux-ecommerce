import React,{useEffect, useCallback, useMemo} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import {useProducts} from '../redux/actions/productActions'
import ProductComponent from './ProductComponent';
import {setProducts} from '../redux/actions/productActions'

const ProductListing = () => {
	const products = useSelector((state) => state.allProducts.products);
	const dispatch = useDispatch();

	const fetchProducts = async() => {
		const response = await axios
		.get("https://fakestoreapi.com/products")
		.catch((err) => {
			console.log("Err", err);
		});
		// console.log(response.data);
		dispatch(setProducts(response.data));
	};

	useEffect(() => {
		fetchProducts();
	}, []);
	console.log("Products :" ,products);

	return(
		// <h1>ProductListing</h1>
		<div className="ui grid container">
			<ProductComponent />
		</div>
		);
};

export default ProductListing;