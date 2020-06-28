import * as React from "react";

import "./components/styles/CreateUrl.css";
import "./components/styles/UrlCreated.css";
import "./components/styles/Greeting.css";
import "./components/styles/Footer.css";
import "./components/styles/Navbar.css";
import "./components/styles/Home.css";
import "./components/styles/Login.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default ({ Component, pageProps }) => (
    <>
	<Navbar />
	<Component {...pageProps} />
	<Footer />
    </>
)
