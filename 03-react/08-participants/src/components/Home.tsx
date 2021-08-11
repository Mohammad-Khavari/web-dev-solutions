import * as React from "react";
import { Link, useParams } from "react-router-dom";
 
interface participants {
	login: string,
	id:number,
	avatar_url: string
}



export default function Home() {
	const [response, setResponse] = React.useState<participants[] | null>(null);


	React.useEffect(() => {
		fetch(
			`https://api.github.com/repos/Powercoders-Switzerland/2021-1-web-dev/contributors`
		)
			.then((response) => response.json())
			.then(setResponse);
	}, []);

	
	return (
		<main>
			<ul>
				{response === null ? "Loading ": response.map((user) => (
					<li key={user.id}>
						<Link to={`fishes/${user.login}`}>
						<img src={user.avatar_url} />
						<h3>{user.login}</h3>
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
    
}