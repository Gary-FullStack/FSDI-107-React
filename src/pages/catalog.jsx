
import Product from "../components/product";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";
import "./catalog.css";


function Catalog() {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [prodsToDisplay, setProdsToDisplay] = useState([]);

	useEffect(function () {
		console.log("component loaded")
		loadCatalog();
	}, []); //empty dependency [] means run code only once during load

	function loadCatalog() {
		//use to get the product list
		let service = new DataService();
		let prods = service.getProducts();
		console.log(prods);
		setProducts(prods);
		setProdsToDisplay(prods);

		//needs to be moved to a service
		let cats = ["fruits", "veggy"];
		setCategories(cats);

	}


	function filter(category) {
		let list = [];
		//find the products that are being called by the button category
		for (let i = 0; i < products.length; i++) {
			let prod = products[i];
			if (prod.category === category) {
				list.push(prod);
			}

		}
		setProdsToDisplay(list);
	}

	function clearFilter() {
		setProdsToDisplay(products);
	}

	return (
		<div className="catalog">
			<h1> Farmer's Market Fresh Items!</h1>
			<h5>Look At these {products.length} new delicious items!</h5>

			<br />

			<button onClick={clearFilter} className="btn btn-danger btn-filter">Show All</button>


			{/* render category into a button*/}
			{categories.map(c => <button key={c} onClick={() => filter(c)} className="btn btn-danger btn-cat">{c}</button>)}
			<br />

			{/* Use array transform to take verbose product list */}
			{prodsToDisplay.map(p => <Product key={p._id} data={p}></Product>)}

		</div>

	);

}

export default Catalog; 