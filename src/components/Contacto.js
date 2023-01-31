import React from 'react';

export const Contacto = () => {
	return (
		<div className="bg-gris">
			<section id="portafolio" className="container_info">
				<div className="container">
					<div className="row">
						<div className="col-8 pe-5">
							<h3>
								<span>Customer</span>&nbsp;Focus
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
						<form className="col-4">
							<div className="mb-3">
								<label for="nombre" className="form-label">
									Your Name
								</label>
								<input
									type="text"
									className="form-control"
									id="nombre"
									placeholder="your name"
								/>
							</div>
							<div className="mb-3">
								<label for="email" className="form-label">
									Your email
								</label>
								<input
									type="email"
									className="form-control"
									id="email"
									placeholder="your email"
								/>
							</div>
							<div className="mb-3">
								<label for="mensaje" className="form-label">
									Example textarea
								</label>
								<textarea
									className="form-control"
									id="mensaje"
									rows="3"></textarea>
							</div>
							<input
								className="boton btn-naranja"
								type="submit"
								value="Submit"
							/>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
};
