import * as React from "react";
import {
	HashRouter,
	Link,
	Switch,
	Route,
} from "react-router-dom";
import * as ReactDOM from "react-dom";
import Home from "./components/Home";
import Cart from "./components/Selected";
import Selected from "./components/Cart";
import Category from "./components/Category";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

export default function App() {
	
	return (
		<HashRouter>
			
			<Switch>
				<Route path= "/category/:category" children={<Category/>} />
				<Route path="/selected/:id" children={<Cart />} />
				<Route path="/cart/" children={<Selected />}/>
				<Route path="/" children={<Home />} />
			</Switch>
		</HashRouter>
	);
}

ReactDOM.render(<App />, appDiv);