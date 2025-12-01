import { useEffect } from "react";
import RouterMenu from "..//RouterMenu.jsx";
import Header from "../Header/header.jsx";
import './App.css';
import AOS from 'aos';

function App() {
	useEffect(() => {
		AOS.init({
			duration:800,
			once: true,
			offset: 100,
		});
	}, []);


	return (
		<div  data-aos="fade-up" className = "wrapper" id = "wrapper">
			<div  className = "canvas" id = "canvas">
				<Header />
				<div className="router">
					<RouterMenu />		
				</div>	
			</div>
		</div>
	)
}

export default App;
