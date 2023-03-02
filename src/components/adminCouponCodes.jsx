import "./adminCouponCodes.css";
import { useState } from "react";


function AdminCouponCodes() {
	const [couponCode, setCouponCode] = useState({});


	function textChanged(e) {
		let text = e.target.value;
		let attr = e.target.name;

		let copy = { ...couponCode };
		copy[attr] = text;
		setCouponCode(copy);

	}

	function save() {
		console.log(couponCode);

	}

	return (

		< div className="ad-coupons" >
			<h3> Make a new Coupon </h3>


			<div className="input-form">
				<input name="code" onChange={textChanged} className="form-control" type="text" placeholder="add new code" />
			</div>

			<div className="input-form">
				<input name="discount" onChange={textChanged} className="form-control" type="text" placeholder="add discount amount" />
			</div>

			<div className="input-form">
				<button onClick={save} className="btn btn-md btn-dark" id="btn2">Save </button>

			</div>



		</div>

	);

}




export default AdminCouponCodes;