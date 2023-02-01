import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useEffect } from 'react';



function Product() {

	useEffect(function () {
		console.log("Hiya, I'm a tasty product!");
	}, []);




	return (
		<div className="product">
			<img src="../images/oranges.jpg" alt="pic"></img>
			<h5>Product name here</h5>

			<div className="prices">
				<label>Total</label>
				<label>Price</label>
			</div>

			<QuantityPicker></QuantityPicker>
			<button className="btn btn-sm btn-outline-success" >Add</button>

		</div>
	);

}

export default Product;