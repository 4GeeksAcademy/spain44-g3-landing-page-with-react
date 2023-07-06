import React from "react";
import {MyNavbar} from "./MyNavbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { MyCard } from "./Mycard.jsx";
import {MyFooter} from "./MyFooter.jsx";



//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<MyNavbar/>
			<div className="container">
				<Jumbotron/>
				<MyCard/>
			</div>
			<MyFooter/>
		</div>
	);
};

export default Home;
