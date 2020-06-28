import React from 'react';
import Link from 'next/link';

export default () => (
    <div className="greeting-container">
	<div className="img-container">
	    <img 
		src="./ls.svg"
		alt="link shortener"
	    />
	</div>
	<div className="greeting-text-container">
	    <h1>Fast, simple, free...</h1>
	    <p>
		xuri.ga takes a simple approach to shortening your urls, giving users a clean and intutive experience
	    </p>
	    <div className="greeting-button-container">
		<Link href="/create">
		    <button className="greeting-more-button dark button bordered">
			Shorten a url
		    </button>
		</Link>
		<Link href="/login">
		    <button className="link greeting-login-button light button bordered">
			Login
		    </button>
		</Link>
	    </div>
	</div>
    </div>
)
