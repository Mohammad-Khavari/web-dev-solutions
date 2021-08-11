import * as React from "react";
import {
	HashRouter,
	Link,
	Switch,
	Route,
} from "react-router-dom";
import * as ReactDOM from "react-dom";
import Home from "./components/Home";
import User from "./components/User";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

export default function App() {
	
	return (
		<HashRouter>
			<nav>
				<ul>
					<li>
						<Link to="/">❤️ Home</Link>
					</li>
					
					<li>
						<Link to="/users">Users</Link>
					</li>
				</ul>
			</nav>

			<Switch>
				<Route path="/fishes/:name" children={<User />} />
				<Route path="/" children={<Home />} />
			</Switch>
		</HashRouter>
	);
}

ReactDOM.render(<App />, appDiv);