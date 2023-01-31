import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {trabajos} from '../data/trabajos';

export const Proyecto = () => {
	const [proyecto, setProyecto] = useState({});
	const params = useParams();
	useEffect(() => {
		let proyecto = trabajos.filter((trabajo) => trabajo.id === params.id);
		setProyecto(proyecto[0]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div id="proyecto" className="bg-gris">
			<div className="detalles">
				<div className="container">
					<div class="row justify-content-center">
						<div className="col-7 pl-5">
							<small>{proyecto.categorias}</small>
							<h2>{proyecto.nombre}</h2>
							<strong>{proyecto.tecnologias}</strong>
							<p className="my-3 mb-5">{proyecto.detalles}</p>
							<Link
									to='/portafolio'
									className="boton btn-naranja">
									All my proyects
								</Link>
						</div>
					</div>
				</div>
			</div>
			<img src={proyecto.img} alt={proyecto.nombre} />
		</div>
	);
};
