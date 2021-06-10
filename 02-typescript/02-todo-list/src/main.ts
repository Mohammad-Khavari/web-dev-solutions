const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}


type State= {title: string, done: boolean}[];

let states: State = [
    {title:"eat lunch",done:true},
    {title:"learn TypeScript", done:false},
    {title:"create object", done:false}
];

const renderList = () => {
	appDiv.innerHTML = "";

	const list = document.createElement("ul");
	const addInput = document.createElement("input");
	const addButton = document.createElement("input");
	addButton.setAttribute("type", "submit");
	addButton.setAttribute(
		"value",
		"Add to-do #" + (states.length + 1)
	);

	const readInputInteger = (
	input: HTMLInputElement
): State => {
	const result = states.value;
	return  result;
};

	for (const state of states) {
		const itemLi = document.createElement("li");
		const addCheck = document.createElement("input");
		addCheck.setAttribute("type", "checkbox")
		addCheck.checked= state.done
		itemLi.textContent = state.title;
		list.appendChild(itemLi);
		itemLi.appendChild(addCheck)

		
	//addInput.setAttribute("type", "text");

	

	const addForm = document.createElement("form");

	addForm.appendChild(list)
	addForm.appendChild(addButton);
         addForm.addEventListener("submit", (event) => {
		event.preventDefault();
		states.push(readInputInteger(addInput));
	});
		
	};
appDiv.appendChild(list);

appDiv.appendChild(addInput);

appDiv.appendChild(addButton);


};

// Render the app on page load.
renderList();