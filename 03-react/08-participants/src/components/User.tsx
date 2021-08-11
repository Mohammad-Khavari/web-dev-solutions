import * as React from "react";
import {useParams } from "react-router-dom";


interface UserInfo {
	name: string,
	bio: string,
	avatar_url: string,
	login: string
	id: number
}


export default function User() {
	const [response, setResponse] = React.useState<UserInfo | null>(null);

	const params = useParams<{ name: string }>();

	React.useEffect(() => {
		fetch(
			`https://api.github.com/users/${params.name}`
		)
			.then((response) => response.json())
			.then(setResponse);
	}, [params]);

	
	return (
		<main>
			<h1>{params.name}</h1>
			<article>
				{response === null ? "Loading... ":
					<div>
						<img src={response.avatar_url} />
						<h2>{response.name}</h2>
						<h4>{response.bio}</h4>
					</div>
				}
			</article>
		</main>
	)
    
	}