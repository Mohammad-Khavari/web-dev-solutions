const celInput = document.getElementById("cel");
const fahInput = document.getElementById("fah");

if(!(celInput instanceof HTMLInputElement)) {
    throw new Error ("No input element with id 'cel' found!");
    
}
if(!(fahInput instanceof HTMLInputElement)) {
    throw new Error ("No input element with id 'fah' found!")
}

 const celToFahr = (celsius:number)=>{
         const fahrenheit = ((celsius * (9/5)) + 32);
         return fahrenheit
     }

const fahrToCel = (fahrenheit:number)=>{
         const celsius = ((fahrenheit - 32 ) * (5/9));
         return celsius
     }

const readInt = (input: HTMLInputElement) => {
	const result = parseInt(input.value);
	return isNaN(result) ? 0 : result;
};
const updateResultforCel = () => {
	const result = celToFahr(readInt(celInput));
	fahInput.value = result.toString();
};
const updateResultforFahr = () => {
	const result = fahrToCel(readInt(fahInput));
	celInput.value = result.toString();
};

celInput.addEventListener("input", updateResultforCel)
fahInput.addEventListener("input", updateResultforFahr)

//updateResultforCel();
//updateResultforFahr()

