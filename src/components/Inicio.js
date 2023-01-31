import React from 'react';
import {Link} from 'react-router-dom';
import { ListadoTrabajos } from './ListadoTrabajos';
export const Inicio = () => {
	return (
		<div>
			<section id="intro">
				<div>
					<h2>
						A Branding <br />
						Agency
					</h2>
					<Link to="/contacto" className="boton">
						contact me
					</Link>
				</div>
			</section>
			<section id="about_me" className="container container_info">
				<div className="row">
					<div className="col-6">
						<h3>
							<span>About</span>&nbsp;Us
						</h3>
						<strong>
							It Is Our Goal To Help You Turn Your Ideas Into Successful
							Reality. Below You’ll Find The Gallery That Includes Some Of The
							Latest Projects
						</strong>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pari atur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
					<div className="col-6 datos">
						<div>
							<h4>Projects</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adip iscing.</p>
						</div>
						<div>
							<h4>Mission</h4>
							<p>Lorem ipsum dolor sit amet.</p>
						</div>
						<div>
							<h4>Date</h4>
							<p>12 June 2018</p>
						</div>
						<div>
							<h4>Photography</h4>
							<p>Oliver Baco</p>
						</div>
					</div>
				</div>
			</section>
			<section id="friday_mood" className="container">
				<div className="row">
					<div className="col-3 d-flex align-items-center">
						<p>Friday Mood At Maximum, Time For Design Fun!</p>
					</div>
					<img
						className="col-3"
						src="https://images01.nicepage.com/d8/e4/d8e430f2e3158287bf4a63fd78ed8e9c.jpeg"
						alt="perro peludo azul"
					/>
					<img
						className="col-3"
						src="https://images01.nicepage.com/2e/9c/2e9cf47e954ed55eac9ee2b71430997f.jpeg"
						alt=""
					/>
					<img
						className="col-3"
						src="https://images01.nicepage.com/7d/fa/7dfa2d6189c272c3b17b432f75d9a5e1.jpeg"
						alt=""
					/>
				</div>
			</section>
			<ListadoTrabajos limite="2"/>
		</div>
	);
};
