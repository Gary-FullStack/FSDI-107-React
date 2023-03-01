import { useEffect, useState } from "react";
import Product from "../components/product";
import DataService from "../services/dataService";
import "./catalog.css";


function Catalog() {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [prodsToDisplay, setProdsToDisplay] = useState([]);

	useEffect(function () {
		console.log("loaded from catalog");
		loadCatalog();
	}, []);


	async function loadCatalog() {

		let service = new DataService();
		let prods = await service.getProducts();
		setProducts(prods);
		setProdsToDisplay(prods);

		let cats = ["fruits", "veggy"];
		setCategories(cats);

	}



	function filter(category) {
		let list = [];

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

			{categories.map(c => <button key={c} onClick={() => filter(c)} className="btn btn-danger btn-cat">{c}</button>)}


			<div className="itemCard">

				{prodsToDisplay.map(p => <Product key={p._id} data={p}></Product>)}

			</div>

		</div>

	);

}

export default Catalog; 