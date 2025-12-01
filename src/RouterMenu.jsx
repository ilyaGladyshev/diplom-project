import React from "react";
import { Route, Routes, useLocation } from "react-router";
import Main from './Pages/Main.jsx'
import About from './Pages/About.jsx'
import Projects from "./Pages/Projects.jsx";
import Contacts from "./Pages/Contacts.jsx";
import './App/App.css';
import { AnimatePresence, motion } from "framer-motion";

const RouterMenu = () => {
	const location = useLocation();
	
	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={location.pathname}
				initial={{ opacity: 0, x: -100}}
				animate={{ opacity: 1, x: 0}}
				exit={{ opacity: 0, x: 100}}
				translation={{duration: 0.35, ease: "easeOut"}}
			>
				<Routes class="routes">
					<Route path="/" element={<Main />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/projects" element={<Projects />}></Route>	
					<Route path="/contacts" element={<Contacts />}></Route>				
				</Routes>
			</motion.div>
		</AnimatePresence>

	)
};

export default RouterMenu;