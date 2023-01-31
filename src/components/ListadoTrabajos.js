import React from 'react';
import {Link} from 'react-router-dom';
import {trabajos} from '../data/trabajos';

export const ListadoTrabajos = ({limite}) => {
	return (
		<div id="trabajos" className="container">
			<div className="row trabajos">
                {/* Nota: Slide() limitara el array */}
				{trabajos.slice(0,limite).map((trabajos) => (
					<article style={{width: '18rem'}} key={trabajos.id}>
						<div className="card">
							<img
								src={trabajos.img}
								className="card-img-top"
								alt={trabajos.nombre}
							/>
							<div className="card-body">
								<h5 className="card-title">{trabajos.nombre}</h5>
								<p className="card-text">{trabajos.detalles}</p>
								<Link
									to={'/proyecto/' + trabajos.id}
									className="boton btn-naranja">
									See more
								</Link>
							</div>
						</div>
					</article>
				))}
			</div>
		</div>
	);
};
