const React = require('react');
const {useParams, Link} = require('react-router-dom');

const PageEditarMusico = () =>{

    let {id} = useParams();

    return(
        <>
            <h1>Editar Musico: {id}</h1>
            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = PageEditarMusico;