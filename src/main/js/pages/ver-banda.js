const React = require('react');
const client = require('../client');
const { Link, useParams, } = require('react-router-dom');
const {useState} = require('react');

const PageVerBanda = (props) => {

    // const id = props.match.params.id;
    let { id } = useParams();
    const [banda, setBanda] = useState({});

    client({
        method: 'GET',
        path: '/api/bandas/' + id
    }).done(response => {
        setBanda(response.entity);
        // console.log(response.entity);
    });


    return (
        <>
            <h1>Ver Banda</h1>
            <table>
                <tr>
                    <th>Nombre</th>
                    <td>{banda.nombre}</td>
                </tr>
            </table>

            <Link to="/">Volver</Link>
        </>
    )

}

module.exports=PageVerBanda;