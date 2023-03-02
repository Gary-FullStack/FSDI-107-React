import "./about.css";
import React, { useState } from "react";



function About() {

	const [visible, setVisible] = useState(false);
	const [phoneVisible, setPhoneVisible] = useState(false);

	function getEmail() {
		if (visible) {

			return "admin@fullstackscout.com";
		}
		else {
			return "";
		}
	}

	function toggleEmail() {
		setVisible(!visible);
	}

	function validateCode(e) {
		const text = e.target.value;
		if (text.toLowerCase() === "code") {
			setPhoneVisible(true);
		} else {
			setPhoneVisible(false);
		}
	}

	function getNumber() {
		return phoneVisible ? '123456789' : '';
	}



	return (

		< div className="about" >

			<h4>Multinational farmer's market. Foods and Items from all over the World.</h4>
			<hr />
			<h5>{getEmail()}</h5>
			<button className="btn btn-primary" onClick={toggleEmail}> click this to see our Email</button>

			<hr />

			<p> Type the word you see below to see my phone number</p>
			<input onChange={validateCode} placeholder="code"></input>
			<h6 className="mt-3">{getNumber()}</h6>

			<hr />

			<div className="img-row">
				<img className="homeImg" src="./images/farmergirl1.jpg" alt="Photo 4" />
				<img className="homeImg" src="./images/pumkingirl.jpg" alt="Photo 5" />
				<img className="homeImg" src="./images/womanshops.jpg" alt="Photo 6" />

			</div>

		</div >
	);

}



export default About;














