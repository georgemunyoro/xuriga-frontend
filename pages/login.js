import React from 'react';

export default function Login() {
    return (
	<>
	    <div className="login-container">
		<div className="login-form-container">
		    <form>
			<h1 className="title">Login</h1>
			<input
			    placeholder="i.e. gavin.belson@hooli.com" 
			    className="input" 
			    type="text" 
			/>
			<input 
			    placeholder="******" 
			    className="input" 
			    type="password" 
			/>
			<input 
			    className="dark button" 
			    type="submit" 
			/>
		    </form>
		</div>
	    </div>
	</>
    )
}

