const React = require('react');
const client = require('../client');
const { Link, useParams, } = require('react-router-dom');
const {useState, useEffect} = require('react');



const PageVerBanda = (props) => {

    let { id } = useParams();
    const [banda, setBanda] = useState({});
    const [integrantes, setIntegrantes] = useState([]);


    useEffect(() => {
        url_banda = '/api/bandas/' + id

        client({
            method: 'GET',
            path: url_banda
        }).done(response => setBanda(response.entity));

        client({
            method: 'GET',
            path: url_banda + '/formacion'
        }).done(response => setIntegrantes(response.entity))
        
    }, []);


    return (
        <>
            <h1>Banda</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{banda.nombre}</td>
                    </tr>
                </tbody>
            </table>

            <hr />

            <h2>integrantes</h2>
            <table>
                <thead>
                    
                </thead>
            </table>

            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = PageVerBanda;