const React = require('react');
const {useState, useEffect} = require('react');
const {useParams, Link} = require('react-router-dom');
const client = require('../client');

const PageEditarBanda = ()=>{

    const {id} = useParams();
    const [banda, setBanda] = useState({});

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/bandas/'+id,
            headers: {'Content-Type': 'application/json'}
        }).done((response)=>{
            setBanda(response.entity)
        })    
    },[])

    const handleSubmit = (e)=>{
        e.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/bandas/'+id,
            headers: {'Content-Type': 'application/json'},
            entity: banda
        }).done(()=>window.location = "/")
    }

    return(
        <>
            <h1>Editar Banda: {id}</h1>

            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input 
                    type="text"
                    name="nombre"
                    value={banda.nombre}
                    onChange={(e)=>{setBanda({...banda, nombre: e.target.value})}} />
                <br/>
                <input type='submit' value={`Editar Banda ${id}`} />
            </form>
            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = PageEditarBanda;