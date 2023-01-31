import React from 'react';
import {NavLink} from 'react-router-dom';
export const HeaderNav = () => {
	return (
		<header>
			<nav className="navbar navbar-expand-lg bg-white">
				<div className="container">
					<NavLink className="navbar-brand" to="/inicio">
						<img
							id="logo"
							src="https://images01.nicepage.com/21/d9/21d9faf766ba46f8f22b24f07b317315.png"
							alt="logo nicepage"
						/>
					</NavLink>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse justify-content-end"
						id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<NavLink to="/inicio" className="nav-link">
								Home
							</NavLink>
							<NavLink to="/curriculum" className="nav-link">
								Resume
							</NavLink>
							<NavLink to="/servicios" className="nav-link">
								Services
							</NavLink>
							<NavLink to="/portafolio" className="nav-link">
								Portafolio
							</NavLink>
							<NavLink to="/contacto" className="nav-link">
								Contact me
							</NavLink>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};
