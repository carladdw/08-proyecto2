import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
// Componentes
import {Contacto} from '../components/Contacto';
import {Curriculum} from '../components/Curriculum';
import {Inicio} from '../components/Inicio';
import {Portafolio} from '../components/Portafolio';
import Servicios from '../components/Servicios';
// Layout
import {Footer} from '../components/layout/Footer';
import {HeaderNav} from '../components/layout/HeaderNav';

export const MisRutas = () => {
	return (
		<BrowserRouter>
			{/**Header y Navegación */}
			<HeaderNav />
			{/**Contenido Central */}
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/inicio" element={<Inicio />} />
				<Route path="/curriculum" element={<Curriculum />} />
				<Route path="/contacto" element={<Contacto />} />
				<Route path="/servicios" element={<Servicios />} />
				<Route path="/portafolio" element={<Portafolio />} />
			</Routes>
			{/**Footer */}
			<Footer />
		</BrowserRouter>
	);
};
