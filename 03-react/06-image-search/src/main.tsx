import * as React from "react";
import { useState } from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}


interface ImageSearch {
	id: number;
	webformatURL: string;
}

const App = (): JSX.Element => {
	const [image, SetImage] = useState<ImageSearch[] | null>(null);
	const [search, setSearch] = useState("");
	const [info, setInfo] = useState("Enter a word!");
	const apiKey = "22075551-4fc5479137d70b93f6424a4f9";
	const url = new URL("https://pixabay.com/api/");

	url.searchParams.append("key", apiKey);
	url.searchParams.append("q", search);
	url.searchParams.append("per_page", "10");
	url.searchParams.append("image_type", "photo");
	
    console.log(url)

	const fetchImage = async () => {
		const response = await fetch(url.toString());
		const json = await response.json();
		const photos = json.hits;

		console.log("This is the json file"+json)
        console.log(photos)
		console.log("This is the response"+response)
	SetImage(photos);
	setInfo("sorry no image found!");
	};
	return (
		<main>
			<div className="image-card">
				<input type="text" value={search} onChange={(e) => {
					setSearch(e.target.value);
				}} onFocus={() => setInfo("")}/>
				<button
					onClick={() => {
						fetchImage();
					}}
				>
					Search Image
				</button>
			</div>
			{image=== null || image.length === 0 ? 
					info
          : image.map((photo) => {
              const { id, webformatURL } = photo;
              return (
                <li key={id}>
                  <img src={webformatURL} alt={search} />
                </li>
              );
            })}
		</main>
	);
};

ReactDOM.render(<App />, appDiv);