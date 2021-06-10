import * as React from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

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
const dieFarbe:{color: string}[] = [
    {color:"red"},
    {color:"blue"},
    {color:"pink"},
    {color:"orange"},
    {color:"skyblue"}
]
const color:string[] = [
    "red","green","blue","pink","gray"
]
const diefarbe = dieFarbe[Math.floor(Math.random() * dieFarbe.length)]
const randomColor = color[Math.floor(Math.random() * color.length)]

const App = () => (
	<div style={{backgroundColor: diefarbe.color}}>
		<p>{randomBook}</p>
    </div>
);


ReactDOM.render(<App />, appDiv);