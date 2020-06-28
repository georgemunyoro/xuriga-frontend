import React from "react";
import Link from "next/link";

export default () => (
    <div className="navbar-container">
	<div className="navbar-start">
	    <div className="navbar-item navbar-brand">
		<img
		    className="nav-logo" 
		    src="./white_logo_405.png" 
		    alt="" 
		/>
	    </div>
	</div>
	<div className="navbar-end">
	    <Link href="/">
		<div className="navbar-item link">
		    Home
		</div>
	    </Link>
	    <Link href="/login">
		<div className="navbar-item link">
		    Login
		</div>
	    </Link>
	    <Link href="/create">
		<div className="navbar-item link">
		    Create
		</div>
	    </Link>
	</div>
    </div>
)
