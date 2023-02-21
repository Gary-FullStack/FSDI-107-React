
import { createContext } from "react";


const DataContext = createContext(
	{
		cart: [],
		user: {},

		addProductsToCart: () => { },
		removeProductsFromCart: () => { },


	});



export default DataContext;