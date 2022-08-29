import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

import '../../styles/clock.scss' 
const Contactcomponent =({contact})=> {
    
    const [edad, setedads] = useState(contact.edad);
    const [fecha, setfecha] = useState(contact.fecha);

    useEffect(() => {
        
        console.log('Component creado')

        const intervalID = setInterval(() => tick(), 1000);
        
        return () => {
            clearInterval (intervalID);
        };
    }, []);

    const tick=()=>{
        //actualizar
        setedads(prevedad=>prevedad+1);
        setfecha(prevfecha=>prevfecha? new Date().toLocaleTimeString():"" );
    }

    return (
            <div className='contenedor'>
                <h2>Nombre: {contact.name} </h2>   
                <h3>Apellido: {contact.last_name} </h3>   
                <h3>Edad: {edad} </h3> 
                <h3 className='c_hora'>Hora: {fecha} </h3>
            </div>
        );
    };


Contactcomponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
};


export default Contactcomponent;