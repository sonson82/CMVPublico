import React from 'react';

import Component2 from '../components/Component2';
import Component1 from '../components/Component1';
import Component3 from '../components/Component3';

const Pagina2 = () => {

    return (
        <>
            <h1 className="route-title">PAGINA 2</h1>
            <Component1 />
            <Component2 />
            <Component3 />
        </>
    );
}

export default Pagina2;