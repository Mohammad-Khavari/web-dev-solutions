import * as React from "react";
import {Link, useParams } from "react-router-dom";



interface Product {
	title: string,
	description : string,
	image: string,
	login: string
	id: number,
	price: number
}
interface ProductList {
	count : number,
	next: string,
	previous: string,
	results: Product[]
}



export default function Cart() {
   const [response, setResponse] = React.useState<ProductList | null>(null);
   const saveLocal = localStorage.getItem('amount');
   const initialProd = saveLocal === null ? [] : JSON.parse(saveLocal)

	   const url = new URL("/shop/product/", window.location.origin);
	   url.searchParams.append("?id__in=", initialProd[0].id)

	React.useEffect(() => {
		fetch(
			url.toString()
		)
			.then((response) => response.json())
			.then(setResponse);
	}, []);

	
	return (
		<>
				<ul  className="main-nav">
                    <li>
						<Link to="/"><p>Home</p></Link>
					</li>
					
					<li>
						<Link to="cart" ><i className="fas fa-shopping-basket"> ({initialProd.length})</i></Link>
					</li>
				</ul>
			<main>
				<h2>Cart</h2>
             <ul className="homeArticles">
				{response === null ? "Loading category... ": response.results.map((item) => (
					<li className="articles" key={item.id}>
						<Link to={`/product/${item.id}`}>
						<img src={item.image} />
						</Link>
					    <p id="price">{`CHF ${item.price}-`}</p>
						<p>{item.title}</p>
					</li>
				))}
			</ul>
		</main>
	</>
	)
    
	}