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

			<h4>About Me</h4>
			<h3> Gary M.</h3>
			<h5>{getEmail()}</h5>
			<button class="btn btn-primary" onClick={toggleEmail}> click this to see my Email</button>

			<hr />

			<p> Type the word you see below to see my phone number</p>
			<input onChange={validateCode} placeholder="code"></input>
			<h6 className="mt-3">{getNumber()}</h6>

		</div >
	);

}



export default About;














