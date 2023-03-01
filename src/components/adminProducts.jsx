import "./adminProducts.css";
import { useState, useEffect } from "react";
import DataService from '../services/dataService';


function AdminProducts() {
	const [product, setProduct] = useState({});
	const [allProducts, setAllProducts] = useState([]);

	useEffect(function () {
		loadProducts();
	}, []);

	async function loadProducts() {
		let service = new DataService();
		let prods = await service.getProducts();
		setAllProducts(prods);
	}



	function textChanged(e) {
		let text = e.target.value;
		let attr = e.target.name;

		let copy = { ...product };
		copy[attr] = text;
		setProduct(copy);

	}

	function saveProduct() {
		console.log(product);
		let savedProd = { ...product };
		savedProd.price = parseFloat(savedProd.price);
		let service = new DataService();
		service.saveProduct(savedProd);

		let copy = [...allProducts];
		copy.push(product);
		setAllProducts(copy);
	}

	return (
		< div className="ad-products" >
			<h3> Create a new product </h3>


			<div className="input-form">
				<label className="form-label">Title</label>
				<input name="title" onChange={textChanged} className="form-control" type="text" />
			</div>

			<div className="input-form">
				<label className="form-label">Category</label>
				<input name="category" onChange={textChanged} className="form-control" type="text" />
			</div>


			<div className="input-form">
				<label className="form-label">image</label>
				<input name="image" onChange={textChanged} className="form-control" type="text" />
			</div>

			<div className="input-form">
				<label className="form-label">Price</label>
				<input name="price" onChange={textChanged} className="form-control" type="number" />
			</div>

			<div className="input-form">
				<button onClick={saveProduct} className="btn btn-md btn-dark" id="button1">Save</button>

			</div>

			<ol className="list-group list-group-numbered">
				{allProducts.map(prod => <li className="list-group-item" key={prod.title}>{prod.title} - ${prod.price}</li>)}
			</ol>
		</div >
	);

}




export default AdminProducts;