import "./notFound.css";


function NotFound() {
	return (

		<div className="broken-link">
			<img className="error-Pic" src="/images/404.png" alt="404"></img>

			<hr />
			<h1>Page not found, go back and try again</h1>

		</div>
	);
}

export default NotFound;