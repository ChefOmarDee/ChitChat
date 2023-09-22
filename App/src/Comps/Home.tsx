import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Home = () => {
	return (
		<React.Fragment>
			<div>Aarons ugly ass</div>
			<h1>UF Grad</h1>
			<div className="card">number of L's Aaron has is 3</div>
			<Link to="/anime-list">next page</Link>
		</React.Fragment>
	);
};
export default Home;
