import "./home.css";
import { Link } from "react-router-dom";

function Home() {
	return (

		< div className="home" >
			<h1> Bubba's Produce Market </h1>
			<h4> Fresh foods, grown locally by folks you know!</h4>


			<Link className="btn btn-primary" to="/catalog"> View our Great Produce  </Link>
		</div >
	);

}

export default Home;