  
import * as React from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}



const App = () => {

    const books: string[] = [
	"Anna Karenina",
	"To Kill a Mockingbird",
	"The Great Gatsby",
	"One Hundred Years of Solitude",
	"A Passage to India",
	"Invisible Man",
	"Don Quixote",
	"Beloved",
	"Mrs. Dalloway",
	"Things Fall Apart",
	"Jane Eyre",
	"The Color Purple",
];

const randomBook = books[Math.floor(Math.random() * books.length)]

const colors:string[] = [
    "red","green","blue","pink","gray","Aqua","BlueViolet","Crimson","DeepPink","Cyan"
]

const color = colors[Math.floor(Math.random() * colors.length)]
const BC = colors[Math.floor(Math.random() * colors.length)]
    
	const [book,setBooks] = React.useState("");

	return (
		<main>
           {//I want to change the body backgroundColor here but it is not working!
           } 
            <body style={{backgroundColor: BC}}>
			<p style={{backgroundColor: color}}>{randomBook}</p>
			<button onClick={() => setBooks(color+BC+book+1)}>
				Random Book
			</button>
            </body>
		</main>
	);
};

ReactDOM.render(<App />, appDiv);