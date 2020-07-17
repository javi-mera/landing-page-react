import React from "react";

import { Jumbotron } from "./jumbotron";
import { Cards } from "./cards";

export function Container() {
	return (
		<div>
			<Jumbotron />
			<Cards />
		</div>
	);
}
