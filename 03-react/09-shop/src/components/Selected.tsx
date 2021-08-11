import * as React from "react";
import {Link, useParams } from "react-router-dom";



interface ProductInfo {
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
	results: ProductInfo[]
}


export default function Selected() {
   const [response, setResponse] = React.useState<ProductList | null>(null);
   const saveLocal = localStorage.getItem('id');
   const intialProd = saveLocal === null ? [] : JSON.parse(saveLocal)

	const params = useParams<{ id: string }>();

	React.useEffect(() => {
		fetch(
			`/product/${params.id}`
		)
			.then((response) => response.json())
			.then(setResponse);
	}, [params]);

	
	return (
		<main>
				<ul id="backHome">
                    <li>
						<Link to="/">Home</Link>
					</li>
					
					<li>
						<Link to="/cart">Cart</Link>
					</li>
				</ul>
		
			<article  id="singleProd">
				{response === null ? "Loading... ":
					<div>
						<img src={response.results.image} />
					     <h4>{response.results.title}</h4>
						 <h3>CHF {response.results.price}-</h3>
						 <button id="button" onClick={()=>{ 
                           localStorage.setItem("id", JSON.stringify(response.results.id))
						 }}>Add to cart</button>
					

					<p className="description">{response.results.description}</p>
                  
					</div>
				}
			</article>
		</main>
	)
    
	}