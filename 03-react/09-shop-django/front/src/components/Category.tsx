import * as React from "react";
import { Link, useParams } from "react-router-dom";
 
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




export default function Category() {
	const [response, setResponse] = React.useState<ProductList | null>(null);
    const saveLocal = localStorage.getItem('id');
    const initialProd = saveLocal === null ? [] : JSON.parse(saveLocal)
    const params = useParams<{ category: string }>();

	React.useEffect(() => {
		fetch(
			`/shop/product/?category=${params.category}`
		)
			.then((response) => response.json())
			.then(setResponse);
	}, [params]);

	
	return (
		<>
		
			<ul  className="main-nav">
                    <li>
						<Link to="/">Home</Link>
					</li>
					
					<li>
						<Link to="/cart"><i className="fas fa-shopping-basket"> ({initialProd})</i></Link>
					</li>
				</ul>
			
			<section className="container">
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
			
          	<main>
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
			</section>
			
		
		</>
	);
    
}