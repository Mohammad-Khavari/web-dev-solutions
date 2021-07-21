import * as React from "react";
import {
	HashRouter,
	Switch,
	Route,
} from "react-router-dom";
import * as ReactDOM from "react-dom";
import Home from "./components/Home";
import Selected from "./components/Selected";
import Cart from "./components/Cart";
import Category from "./components/Category";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

export default function App() {
	
	return (
		<HashRouter>
			
			<Switch>
				<Route path="/category/:category" children={<Category/>} />
				<Route path="/selected/:id" children={<Selected />} />
				<Route path="/cart" children={<Cart />}/>
				<Route path="/" children={<Home />} />
			</Switch>
		</HashRouter>
	);
}

ReactDOM.render(<App />, appDiv);