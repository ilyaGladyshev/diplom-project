import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import './hero.css';
import FullFirstProject from '../Projects/FullFirstProject';
import FullSecondProject from '../Projects/FullSecondProject';
import FullThirdProject from '../Projects/FullThirdProject';
import DarkSelector from './DarkSelector';

const Header = (props) => {
	return (
		<div>
			<div id="head">
				<header>
					<div className="header">
						<div className="main-menu-container">
							<div className="menu-container">
								<div className="header__logo">И.А. Гладышев</div>
								<nav>
									<ul className="nav">
										<li className='nav__item'><Link to='/'>Главная страница</Link></li>	
										<li className='nav__item'><Link to='/about'>Обо мне</Link></li>	
										<li className='nav__item'><Link to='/projects'>Проекты</Link></li>	
										<li className='nav__item'><Link to='/contacts'>Контакты</Link></li>	
										<li className="nav__item nav__item_button"><DarkSelector /></li>						
									</ul>
								</nav>
							</div>
						</div> 
					</div>
				</header>
				<main>
					<div className="container">	
						<section className="hero">
							<h1 className="hero__title">Дипломный проект сайта</h1>
							<div className="hero__image"></div>
							<div className="hero__parametrs">
								<div className="hero__parametrs_item">
									<span><strong>Смелым</strong></span>
									<span>помогает судьба</span>
								</div>
							</div>
						</section>
					</div>
				</main>
			</div> 			
		</div>
	)
}

export default Header;