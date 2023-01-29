import "./product.css";
import QuantityPicker from "./quantityPicker";

function Product() {

	return (
		<div className="product">
			<img src="https://picsum.photos/150/180" alt="pic"></img>
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