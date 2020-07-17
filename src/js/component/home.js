import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

import { NavBar } from "./navbar";
import { Container } from "./container";
import { Footer } from "./footer";
//create your first component
export function Home() {
	return (
		<div>
			<NavBar />
			<Container />
			<Footer />
		</div>
	);
}
