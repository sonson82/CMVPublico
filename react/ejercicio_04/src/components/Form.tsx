import React, { useState } from 'react';

const Form = () => {

    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [submit, setSubmit] = useState<boolean>(false);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        event.preventDefault();

       switch(event.currentTarget.name){
        case 'name':
            setName(event.currentTarget.value);
            break;
        case 'surname':
            setSurname(event.currentTarget.value);
            break;
        default:
            break;
       }
        
    }
    
    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

        setSubmit(true);
    }


    return (
        <>
       
            <h1>FORM</h1>

            <form onSubmit={handleSubmit}>

                <label> Name:</label>
                <br></br>
                <input type="text" name="name"  value={name}  onChange={handleChange} />

                <br></br>

                <label>Apellido:</label>
                <br></br>
                <input type="text" name="surname"  value={surname}  onChange={handleChange} />

                <br></br>
                <br></br>
                
                <input type="submit" value="Submit"/>
            </form>

            <br></br>

            <p> {submit ? 'Nombre: ' + name + ' ' + surname : ''}</p>
    
        </>
    );
}

export default Form;