import axios from "axios";

var catalog = [
];



class DataService {

	async getProducts() {
		let response = await axios.get("http://127.0.0.1:5000/api/catalog");
		return response.data;
	}


	async saveProduct(product) {
		let response = await axios.post("http://127.0.0.1:5000/api/catalog", product);
		return response.data;
	}

}

export default DataService;