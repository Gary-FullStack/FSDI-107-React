import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useEffect, useState } from 'react';


function Product(props) {

	const [quantity, setQuantity] = useState(1);

	useEffect(function () {
		console.log("Hiya, I'm a tasty product!");
	}, []);

	function onQuantityChange(qty) {
		console.log(" update value: " + qty);
		setQuantity(qty);
	}

	function getTotal() {
		let total = props.data.price * quantity;
		return total.toFixed(2);
	}

	function logItem() {
		console.log("Adding " + quantity + " " + props.data.title);

	}

	return (
		<div className="product">
			<img src={"/images/" + props.data.image} alt="pic"></img>
			<h5>{props.data.title}</h5>

			<div className="prices">
				<label>Price ${getTotal()}</label>
				<label>Total ${props.data.price.toFixed(2)}</label>
			</div>

			<QuantityPicker onChange={onQuantityChange} ></QuantityPicker>
			<button onClick={logItem} className="btn btn-sm btn-outline-success" >Add</button>

		</div>
	);

}
export default Product;