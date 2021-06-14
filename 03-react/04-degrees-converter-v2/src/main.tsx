import * as React from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}


const toInt = (
	value: string
): number => {
	const result = parseInt(value);
	return isNaN(result) ? 0 : result;
};

const App = (): JSX.Element => {
    const [a, setA] = React.useState("");
	const [b, setB] = React.useState("");
     
    const celToFahr = (celsius:number)=>{
         const fahrenheit = ((celsius * (9/5)) + 32);
         return fahrenheit
     }

    const fahrToCel = (fahrenheit:number)=>{
         const celsius = ((fahrenheit - 32 ) * (5/9));
         return celsius
     }

	return (
		<main>
			<input
				type="number"
				value={a}
				onChange={(e) =>{ 
					setB(fahrToCel(toInt(e.target.value)).toFixed(2))
					setA(e.target.value)}}
			/>
			{" °F to °C "}
			<input
				type="number"
				value={b}
				onChange={(e) =>{
					setA(celToFahr(toInt(e.target.value)).toFixed(2))
					 setB(e.target.value)}}
			/>

		</main>
	);
};

ReactDOM.render(<App />, appDiv);