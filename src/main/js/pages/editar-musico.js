const React = require('react');
const {useParams, Link} = require('react-router-dom');

const PageEditarMusico = ()=>{

    const {id} = useParams();

    return(
        <>
            <h1>Editar Musico: {id}</h1>
            <form>
                
            </form>
            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = PageEditarMusico