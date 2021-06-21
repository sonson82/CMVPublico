import React from 'react';

import CrudNotificaciones from '../components/CrudNotificaciones'
import CrudAvisos from '../components/CrudAvisos'

const Inicio = () => {

    return (
        <>
    
            <h1 className="route-title">INICIO</h1>
            <h1 className="text-center">CRUD APP</h1>
            <br />
            <CrudNotificaciones />
            <CrudAvisos />
        </>
    );
}

export default Inicio;