import React from "react";
import "./App.css";
import Home from "./Comps/Home";
import Home2 from "./Comps/Home2";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<React.Fragment>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/anime-list" element={<Home2 />} />
				</Routes>
			</Router>
		</React.Fragment>
	);
}

export default App;
