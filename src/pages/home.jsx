import "./home.css";
import { Link } from "react-router-dom";

function Home() {
	return (

		< div className="home" >
			<h1> Your Local Produce Market </h1>
			<h4> Fresh foods, grown locally, by folks you know!</h4>
			<Link className="btn btn-primary" to="/catalog"> View our Great Produce  </Link>

			<hr />

			<div className="img-row">
				<img className="homeImg" src="./images/mansells.jpg" alt="Photo 1" />
				<img className="homeImg" src="./images/womansells.jpg" alt="Photo 2" />
				<img className="homeImg" src="./images/womanshopping.jpg" alt="Photo 3" />

			</div>
		</div >



	);
}



export default Home;