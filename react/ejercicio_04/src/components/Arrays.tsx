import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

const Arrays = () => {

    const [numeros1] = useState<number[]>([ 1, 2, 3, 4, 5 ])
    const [numeros2] = useState<number[]>([ 6, 7, 8, 9, 10 ])

    const [numeros, setNumeros] = useState<number[]>([
        ...numeros1,
        ...numeros2
    ])

    const [numero, setNumero] = useState<number> (numeros1.length + numeros2.length +1)


    useEffect(() => {
        console.log("Array 1 números: " + numeros1)
        console.log("Array 2 números: " + numeros2)
    }, [numeros1, numeros2]);


    useEffect(() => {
        console.log("Array números: " + numeros)
    }, [numeros]);


    const aumentar = () =>{
        setNumero( numero + 1 )

        setNumeros([
            ...numeros,
            numero
        ]) 
    }

    return (
        <>
            <h1>ARRAYS</h1>

            <div className="cont-all-center">
                <Button variant="primary"  className="btn btn-lg" onClick={aumentar}>AUMENTAR</Button>
            </div>
            <p>¡VER CONSOLA!</p>
        </>
    );
}

export default Arrays;