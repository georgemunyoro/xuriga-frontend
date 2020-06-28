import React from "react";
import Router from 'next/router'

export default function CreateUrl() {
    const [slug, setSlug] = React.useState("");
    const [url, setUrl] = React.useState("");

    const generateUrl = async (event) => {
	event.preventDefault();

	const requestUrl = "https://xuriga-api.herokuapp.com/api/create";
	const rawResponse = await fetch(requestUrl, {
	    method: "POST",
	    headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	    },
	    body: JSON.stringify({
		url: url,
		slug: slug
	    })
	});

	const data = await rawResponse.json();
	Router.push("/m/" + data.id);
    }

    const handleSlugInput = (event) => {
	const reg = RegExp("[0-9a-zA-Z]");
	if (!reg.test(event.key) && event.key !== "backspace"){
	    event.preventDefault();
	}
    }

    return (
	<div className="login-container">
	    <div className="login-form-container">
		<form onSubmit={ generateUrl }>
		    <div className="title-container">
			<h1 className="title">xuri.ga/</h1>
			<h1 className="title slug">{ slug }</h1>
		    </div>
		    <input 
			name="url" 
			onChange={(e) => setUrl(e.target.value)} 
			placeholder="URL : i.e. https://www.mywebsite.com/somewhere" 
			className="input" type="text" 
		    />
		    <input 
			onKeyDown={ handleSlugInput } 
			maxLength={ 10 } onChange={(e) => setSlug(e.target.value)} 
			name="slug" 
			placeholder="The slug is the id associated to your url i.e. xuri.ga/slug" 
			className="input" 
			type="text" 
		    />
		    <p>
			<i>If you don't enter a slug or the one you want is not available, we will generate a random one for you.</i>
		    </p>
		    <input
			className="dark button" 
			value="Generate" 
			type="submit" 
		    />
		</form>
	    </div>
	</div>
    )
}
