import * as React from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

   interface UserForm{
       firstname: string,
       lastname: string,
       age: number
   }

const App = (): JSX.Element => {
	 const [user, setUser] = React.useState<UserForm>({
		 firstname: "",
		 lastname: "",
		 age: 0

	 });
	
    function handleSubmit(e: { preventDefault: () => void; }) {
		e.preventDefault()
		
	}

	return (
		<main>
			<form onSubmit={handleSubmit}>
			
		<fieldset>
		<legend>Add New User</legend>
			
		  <input type="text" 
		     value={user.firstname}
			 placeholder= "First Name"
		     onChange={(e) => {
		      setUser((user) => ({...user,firstname: e.target.value}))}
		}
          />
		  <input type="text" 
		         placeholder= "Last Name"
		         value={user.lastname} 
				 onChange={(e) => {
		         setUser((user) => ({...user,lastname: e.target.value}))}}/>
		
		<input type="number"
		       placeholder="Age"
		       value={user.age}  
			   onChange={(e) => {{
		       setUser((user) => ({...user,age: parseInt(e.target.value)})
			   )}}}/>
			   <br/>
		<input type="submit" value="submit"/>

		</fieldset>
		<ul><li>{}</li>
		
		</ul>
		  
		  </form>
		
		</main>
	);
};


ReactDOM.render(<App />, appDiv);