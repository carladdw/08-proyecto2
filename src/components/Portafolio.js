import React from 'react';
import { ListadoTrabajos } from './ListadoTrabajos';

export const Portafolio = () => {
	return (
		<div className="bg-gris">
			<section id="portafolio" className="container_info">
				<div className="container">
					<div className="row">
						<div className="col-8 pr-3">
							<h3>
								<span>More Than</span>&nbsp;A Portfolio
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
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pari atur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
						</div>
						<div className="col-4 datos">
							<div>
								<h4>Awards</h4>
								<p>Forbes 30 Under 30 Forbes (US), 2014</p>
							</div>
							<div>
								<h4>Vision</h4>
								<p>Lorem ipsum dolor sit amet.</p>
							</div>
							<div>
								<h4>Best Project 2018</h4>
								<p>12 June 2018</p>
							</div>
						</div>
					</div>
				</div>
				<ListadoTrabajos/>
			</section>
		</div>
	);
};
