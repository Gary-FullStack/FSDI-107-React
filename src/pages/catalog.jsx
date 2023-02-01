
import Product from "../components/product";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";
import "./catalog.css";


function Catalog() {
	const [products, setProducts] = useState([]);

	useEffect(function () {
		console.log("component loaded")
		loadCatalog();
	}, []); //empty dependency [] means run code only once during load

	function loadCatalog() {
		//use to get the product list
		let service = new DataService();
		let inventory = service.getProducts();
		console.log(inventory);
		setProducts(inventory);
	}

	function magicTest() {
		console.log("zap em all...");
		setProducts([]);
	}

	return (
		<div className="catalog">
			<h1> Farmer's Market Fresh Items!</h1>
			<h5>Look At these {products.length} new delicious items!</h5>
			<button onClick={magicTest} className=" btn btn-danger">Zap em!</button>
			<br />

			{/* Use array transform to take verbose product list */}

			{products.map(p => <Product data={p}></Product>)}

		</div>

	);

}

export default Catalog; 