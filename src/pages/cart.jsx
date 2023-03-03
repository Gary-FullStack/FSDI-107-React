
import "./cart.css";
import { useContext } from "react";
import DataContext from "../store/dataContext";


function Cart() {

	const cart = useContext(DataContext).cart;
	return (
		<div className="cart" >
			<h1>Shopping Cart</h1>
			<h4>You Have {cart.length} items in your shopping cart.</h4>

			{cart.map((prod) => (

				<div className="item-row">
					<img src={"/images/" + prod.image} alt="produce"></img>
					<h3> {prod.title} </h3>
					<h5>{prod.quantity} </h5>
					<h5>{prod.price * prod.quantity}</h5>
					<button className="btn btn-danger">Delete</button>
				</div>

			))}

		</div>
	);
}





export default Cart;