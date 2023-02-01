import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useEffect } from 'react';


function Product(props) {

	useEffect(function () {
		console.log("Hiya, I'm a tasty product!");
	}, []);

	return (
		<div className="product">
			<img src={"/images/" + props.data.image} alt="pic"></img>
			<h5>{props.data.title}</h5>

			<div className="prices">
				<label>Price ${props.data.price.toFixed(2)}</label>
				<label>Total ${props.data.price.toFixed(2)}</label>
			</div>

			<QuantityPicker></QuantityPicker>
			<button className="btn btn-sm btn-outline-success" >Add</button>

		</div>
	);

}
export default Product;