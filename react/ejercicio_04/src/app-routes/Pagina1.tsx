import React from 'react';

import Component2 from '../components/Component2';
import Component1 from '../components/Component1';


const Pagina1 = () => {

    return (
        <>
    
            <h1 className="route-title">PAGINA 1</h1>
            <Component1 />
            <Component2 />
     
        </>
    );
}

export default Pagina1;