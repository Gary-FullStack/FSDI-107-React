
import { useState } from 'react';
import DataContext from "./dataContext";


function GlobalData(props) {
	const [cart, setCart] = useState([]);
	const [fakeuser, setFakeUser] = useState({ name: "FakeBoy" });


	function addProductsToCart() {
		console.log("Global is called");
	}
	function removeProductsFromCart() { }


	return (
		<DataContext.Provider
			value={{
				cart: cart,
				user: fakeuser,
				addProductsToCart: addProductsToCart,
				removeProductsFromCart: removeProductsFromCart
			}}

		>
			{props.children}
		</DataContext.Provider >

	)

}

export default GlobalData;