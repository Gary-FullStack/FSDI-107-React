import "./adminProducts.css";
import { useState } from "react";


function AdminProducts() {
	const [product, setProduct] = useState({});
	const [allProducts, setAllProducts] = useState([]);


	function textChanged(e) {
		let text = e.target.value;
		let attr = e.target.name;

		let copy = { ...product };
		copy[attr] = text;
		setProduct(copy);

	}

	function saveProduct() {
		console.log(product);

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
				<label className="form-label">Image name</label>
				<input name="imageName" onChange={textChanged} className="form-control" type="text" />
			</div>

			<div className="input-form">
				<label className="form-label">Price</label>
				<input name="price" onChange={textChanged} className="form-control" type="number" />
			</div>

			<div className="input-form">
				<button onClick={saveProduct} className="btn btn-md btn-dark" id="button1">Save</button>

			</div>

			<ul>
				{allProducts.map(prod => <li key={prod.title}>{prod.title}</li>)}
			</ul>
		</div >
	);

}




export default AdminProducts;