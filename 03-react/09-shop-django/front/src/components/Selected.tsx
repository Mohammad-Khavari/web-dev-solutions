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
interface Infos{
	id: number,
	quantity: number,
}


export default function Selected() {
	const [response, setResponse] = React.useState<Product | null>(null);
    const saveLocal = localStorage.getItem('amount');
    const initialProd = saveLocal === null ? [] : JSON.parse(saveLocal)

	function append<T>(array: T[], value: T) {
    return [...array, value];
}

    function replace<T>(array: T[], value: T, index: number) {
    return [
        ...array.slice(0, index),
        value,
        ...array.slice(index + 1),
    ];
}
   

	const params = useParams<{ id: string }>();

	React.useEffect(() => {
		fetch(
			`/shop/product/${params.id}/`
		)
			.then((response) => response.json())
			.then(setResponse);
	}, [params]);
     
	const[amount, setAmount] = React.useState<Infos[]>(initialProd)

	React.useEffect(()=>{
		 localStorage.setItem("amount", JSON.stringify(amount))
		},[amount])
		if (response === null){
			return <p>Loading.....</p>;
	}
	const {id, image, title, price, description}= response;


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
			<main>
			<h1>{params.id}</h1>
			<article  id="singleProd">
				{
					<div>
						<img src={image} />
					     <h3>{title}</h3>
						 <p id="price">CHF {price}-</p>
						 <button id="button" onClick={()=>{ 
						
                          const index = amount.findIndex(response => response.id == id);
						 
						  if(index == -1){
							  setAmount(append(amount,{id, quantity: 1}))
						  }else{
							  const newQuantity = amount[index].quantity +1
							  setAmount(replace(amount, {id, quantity: newQuantity}, index))
						  }

						 }}><i className="fas fa-cart-plus"></i></button>
					

					<p className="description">{description}</p>
                  
					</div>
				}
			</article>
		</main>
		</>
	)
    
	}