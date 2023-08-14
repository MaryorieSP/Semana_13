const React = require('react');
const client = require('../client');
const { Link, useParams, } = require('react-router-dom');
const {useState} = require('react');

const PageVerMusico = (props) => {

    // const id = props.match.params.id;
    let { id } = useParams();
    const [musico, setMusico] = useState({});

    client({
        method: 'GET',
        path: '/api/musicos/' + id
    }).done(response => {
        setMusico(response.entity);
        // console.log(response.entity);
    });


    return (
        <>
            <h1>Ver Musico</h1>
            <table>
                <tr>
                    <th>Nombre</th>
                    <td>{musico.nombre}</td>
                </tr>
            </table>

            <Link to="/">Volver</Link>
        </>
    )

}

module.exports=PageVerMusico;