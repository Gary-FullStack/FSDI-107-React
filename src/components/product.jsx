import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useEffect, useState, useContext } from 'react';
import DataContext from "../store/dataContext";


function Product(props) {

	const [quantity, setQuantity] = useState(1);

	useEffect(function () {
		console.log("Hiya, I'm a tasty product!");
	}, []);


	let addProductsToCart = useContext(DataContext).addProductsToCart;

	function onQuantityChange(qty) {
		console.log(" update value: " + qty);
		setQuantity(qty);
	}

	function getTotal() {
		let total = props.data.price * quantity;
		return total.toFixed(2);
	}

	function addProduct() {
		console.log("Adding " + quantity + " " + props.data.title);
	}

	function handleAdd() {
		console.log("I've been clicked!", props.data);
		let copy = { ...props.data, quantity: quantity }
		addProductsToCart(copy);

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
			<button onClick={handleAdd} className="btn btn-sm btn-outline-success" >Add</button>

		</div>
	);

}
export default Product;