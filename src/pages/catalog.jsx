
import Product from "../components/product";
import { useEffect } from "react";
import DataService from "../services/dataService";
import "./catalog.css";


function Catalog() {

	useEffect(function () {
		console.log("component loaded")
		loadCatalog();
	}, []); //empty dependency [] means run code only once during load

	function loadCatalog() {
		//use to get the product list
		let service = new DataService();
		let inventory = service.getProducts();
		console.log(inventory);
	}


	return (
		<div className="catalog">
			<h1> Farmer's Market Fresh Items!</h1>

			<Product></Product>
			<Product></Product>
			<Product></Product>
			<Product></Product>
			<Product></Product>
			<Product></Product>
			<Product></Product>
			<Product></Product>
			<Product></Product>
			<Product></Product>
			<Product></Product>
			<Product></Product>

		</div>

	);

}

export default Catalog; 