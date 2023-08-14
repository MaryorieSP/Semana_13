const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const PageHome = require('./pages/home');
const PageVerInstrumento = require('./pages/ver-instrumento');
const PageNuevoInstrumento = require('./pages/nuevo-instrumento');
const PageNuevoMusico = require('./pages/nuevo-musico');
const PageEditarMusico = require('./pages/editar-musico');
const PageEditarInstrumento = require('./pages/editar-instrumento');
const PageVerBanda = require ('./pages/ver-banda');
const PageNuevoBanda = require('./pages/nuevo-banda');
const PageEditarBanda = require('./pages/editar-banda');
const PageVerMusico = require('./pages/ver-musico')


const router = createBrowserRouter([
	{path: '/', element: <PageHome />},
	{path: '/ver-instrumento/:id', element: <PageVerInstrumento />},
	{path: '/nuevo-instrumento', element: <PageNuevoInstrumento />},
	{path: '/nuevo-musico', element: <PageNuevoMusico />},
	{path: '/editar-musico/:id', element: <PageEditarMusico />},
	{path: '/editar-instrumento/:id', element: <PageEditarInstrumento />},
	{path: '/ver-banda/:id', element: <PageVerBanda />},
	{path: '/nuevo-banda', element: <PageNuevoBanda />},
	{path: '/editar-banda/:id', element: <PageEditarBanda />},
	{path: '/ver-musico/:id', element: <PageVerMusico />},
])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react')
)
