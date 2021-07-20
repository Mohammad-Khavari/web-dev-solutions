import * as React from "react";
import {Link, useParams } from "react-router-dom";



interface UserInfo {
	title: string,
	description : string,
	image: string,
	login: string
	id: number,
	price: number
}


export default function Selected() {
	const [response, setResponse] = React.useState<UserInfo | null>(null);
   const saveLocal = localStorage.getItem('id');
   const intialProd = saveLocal === null ? [] : JSON.parse(saveLocal)
   

	const params = useParams<{ id: string }>();

	React.useEffect(() => {
		fetch(
			`https://fakestoreapi.com/products/${intialProd}`
		)
			.then((response) => response.json())
			.then(setResponse);
	}, []);

	
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
			<h1>{params.id}</h1>
			<article  id="singleProd">
				{response === null ? "Loading... ":
					<div>
						<img src={response.image} />
					     <h4>{response.title}</h4>
						 <h3>CHF {response.price}-</h3>
						 <button id="button" onClick={()=>{ 
                          
						 }}>Buy Now</button>
					

					<p className="description">{response.description}</p>
                  
					</div>
				}
			</article>
		</main>
	)
    
	}