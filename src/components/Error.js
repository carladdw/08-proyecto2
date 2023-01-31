import React from 'react';
import {Link} from 'react-router-dom';

export const Error = () => {
	return (
		<div id="error" className="bg-gris">
			<div className="container">
        <div className="row justify-content-center">
          <div className="contenido col-6">
            <h2>Error 404</h2>
            <p>This page does not exist</p>
            <Link to="/inicio" className="boton">
              back to top
            </Link>
          </div>
        </div>
      </div>
		</div>
	);
};
