import * as React from "react";
import { Link, useParams } from "react-router-dom";
 
interface participants {
	title: string,
	id:number,
	image: string,
	price:number,
	category: string
}



export default function category() {
	const [response, setResponse] = React.useState<participants[] | null>(null);

    const params = useParams<{ category: string }>();

	React.useEffect(() => {
		fetch(
			`https://fakestoreapi.com/products/category/${params.category}`
		)
			.then((response) => response.json())
			.then(setResponse);
	}, []);

	
	return (
		<main>
			<div className="home">
				<ul>
                    <li>
						<Link to="/">Home</Link>
					</li>
					
					<li>
						<Link to="/cart">Cart</Link>
					</li>
				</ul>
			</div>
			<nav>
				<ul>
					
					<li>
						<Link to={"/category/women's clothing"}>Women's clothing </Link>
					</li>

					<li>
						<Link to={"/category/men's clothing"}>Men's clothing</Link>
					</li>
                     
					<li>
						<Link to={"/category/jewelery"}>Jewelry</Link>
					</li>

					<li>
						<Link to={"/category/electronics"}>Electronics</Link>
					</li>
					
				</ul>
			</nav>
			<ul>
				{response === null ? "Loading category... ": response.map((user) => (
					<li key={user.id}>
						<Link to={`/category/${user.id}`}>
						<img src={user.image} />
						</Link>
					    <p id="price">{`CHF ${user.price}-`}</p>
						<p>{user.title}</p>
					</li>
				))}
			</ul>
		</main>
	);
    
}