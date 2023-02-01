
var catalog = [
	{
		"title": "orange",
		"category": "fruits",
		"price": .50,
		"image": "oranges.jpg",
		"_id": "photo1"
	},

	{
		"title": "Green Bell pepper",
		"category": "veggy",
		"price": .75,
		"image": "bellpepper.jpg",
		"_id": "photo2"
	},

	{
		"title": "Blueberry",
		"category": "fruits",
		"price": 2.50,
		"image": "blueberry.jpg",
		"_id": "photo3"
	},

	{
		"title": "Carrots",
		"category": "fruits",
		"price": 1.50,
		"image": "carrots.jpg",
		"_id": "photo4"
	},

	{
		"title": "greenbeans",
		"category": "fruits",
		"price": 5.50,
		"image": "greenbeans.jpg",
		"_id": "photo5"
	},

	{
		"title": "chilies",
		"category": "fruits",
		"price": 2.50,
		"image": "chilies.jpg",
		"_id": "photo6"
	},

	{
		"title": "redonion",
		"category": "fruits",
		"price": 3.50,
		"image": "redonion.jpg",
		"_id": "photo7"
	},

	{
		"title": "watermelon",
		"category": "fruits",
		"price": 5.50,
		"image": "watermelon.jpg",
		"_id": "photo8"
	},

	{
		"title": "zuccini",
		"category": "fruits",
		"price": 1.50,
		"image": "zuccini.jpg",
		"_id": "photo9"
	},




];

class DataService {

	getProducts() {
		//no server side, so this is a mock-up.

		return catalog;
	}



}

export default DataService;