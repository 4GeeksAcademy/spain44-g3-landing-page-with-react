import React from "react";
import {MyNavbar} from "./MyNavbar.jsx";
import {MyFooter} from "./MyFooter.jsx";



//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<MyNavbar/>
			<MyFooter/>
		</div>
	);
};

export default Home;
