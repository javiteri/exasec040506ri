import React from 'react'
import { Contact } from '../../models/contact.class';
import Contactcomponent from '../forms/contactcomponent'
import '../../styles/clock.scss' 

function ContactListComponent(props) {
    
  // crea un nuevo objeto `Date`
 var today = new Date();

 const defaultcontact = new Contact('Javier', 'Viteri', 42, today.toLocaleString());
  
    return (
    <div className='contact-container'>
        <h1>Los Datos del Componete:</h1>
    {/*Aplicar for/map para renderizar una lista */}
    <Contactcomponent contact={defaultcontact} ></Contactcomponent>
    </div>
  )
}

export default ContactListComponent