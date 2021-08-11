import * as React from "react";
import { BrowserRouter, Link, useParams } from "react-router-dom";
 
interface Product {
	title: string,
	id:number,
	image: string,
	price:number,
	category: string
}
interface ProductList {
	count : number,
	next: string,
	previous: string,
	results: Product[]
}



export default function Home() {
	const [response, setResponse] = React.useState<ProductList | null>(null);
    const saveLocal = localStorage.getItem('amount');
    const initialProd = saveLocal === null ? [] : JSON.parse(saveLocal)

	React.useEffect(() => {
		fetch(
			`/shop/product/`
		)
			.then((response) => response.json())
			.then(setResponse);
	}, []);

	
	return (
		<>
				<ul  className="main-nav">
                    <li>
						<Link to="/"><i className="fas fa-home"></i></Link>
					</li>
					
					<li>
						<Link to="/cart"><i className="fas fa-shopping-basket"> ({initialProd.length})</i></Link>
					</li>
				</ul>
			
			<section className="container">
			<nav>
				<ul>
					<li>
						<Link to={`/category/women's clothing`}>Women's clothing </Link>
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
			<main>
            <ul className="homeArticles">
				{response === null ? "Loading home... ": response.results.map((user) => (
					<li className="articles" key={user.id}>
						<Link to={`/selected/${user.id}`}>
						<img src={user.image} />
						</Link>
					    <p id="price">{`CHF ${user.price}-`}</p>
						<p>{user.title}</p>
					</li>
				))}
			</ul>
			</main>
			</section>
		</>	
		
	);
    
}