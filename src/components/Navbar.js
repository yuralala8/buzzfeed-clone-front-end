import React from 'react';
import '../App.css';
import { NavLink, Redirect } from 'react-router-dom';

const Navbar = () => {
	return(
		<div className="navbar">
			<div className="row">
			<img src="/buzzfeed.png" className="logo"/>
				<div className="menu">
					<li className="menu-item">News</li>
					<li className="menu-item">Videos</li>
					<li className="menu-item">Quizzes</li>
					<li className="menu-item">Tasty</li>
					<li className="menu-item">More <i className="fa fa-caret-down" aria-hidden="true"></i></li>
				</div>
				<div className="search-box">
					<input type="text" placeholder="Search" className="search"/>
				</div>
				<div className="circles">
					<svg height="50" width="50">
						<circle cx="25" cy="25" r="20" fill="rgb(255, 238, 0)"/>
					</svg>
					<svg height="50" width="50">
						<circle cx="25" cy="25" r="20" fill="rgb(255, 238, 0)"/>
					</svg>
					<svg height="50" width="50">
						<circle cx="25" cy="25" r="20" fill="rgb(255, 238, 0)"/>
					</svg>
					<svg height="50" width="50">
						<circle cx="25" cy="25" r="20" fill="rgb(255, 238, 0)"/>
					</svg>
					<svg height="50" width="50">
						<circle cx="25" cy="25" r="20" fill="red"/>
					</svg>
				</div>
			</div>
		</div>
		)
}

export default Navbar