import React, {useState} from 'react';
import shortid from 'shortid' ;

function CrudAvisos() {

    interface INotificacion {
      value: string; 
      id: string;
    }
    
    const [aviso, setAviso] = useState<string>('')
    const [avisos, setAvisos] = useState < (INotificacion)[]> ([]);
    const [error, setError] = useState<string>('')
    const [id, setId] = useState<string>('')
    const [modoEdicion, setModoEdicion] = useState(false)



    const agregarNotificacion = (event: React.SyntheticEvent) => {
        event.preventDefault();

        if(!aviso.trim()){
          setError('El campo no puede estar Vacío')
          return
        }
        setAvisos([...avisos, { value: aviso, id:shortid.generate() }]);

        setError('')
        setAviso('')
    }

    const editar = (item:INotificacion) => {
      setModoEdicion(true)
      setAviso(item.value)
      setId(item.id)
    }


    const editarNotificacion = (event: React.SyntheticEvent)  => {
        event.preventDefault()

        if(!aviso.trim()){
          console.log('Campo vacio')
          setError('El campo no puede estar vacío')
          return
        }

        var arrayAv:INotificacion[]  = avisos.map(item => item.id === id ? {value: aviso, id:id} : item);

        setAvisos(arrayAv)
        setModoEdicion(false)
        setAviso('')
        setId('')
        setError('')
    }

    const eliminarNotificacion = (id:string) => {

      var arrayAv:INotificacion[] = avisos.filter(item => item.id !== id)

      setAvisos(arrayAv)
    }


    return (
      <div className="container mt-5">
          <div className="row">
            <div className="col-8">
              <h4 className="text-center">AVISOS</h4>
              <ul className="list-group">
                {
                  avisos.length === 0 ? (
                    <li className="list-group-item">No hay avisos</li>
                  ) : ( 
                    
                    avisos.map(item => (
                      <li className="list-group-item" key={item.id}>
                        <span className="lead">{item.value}</span>
                        <button 
                          className="btn btn-sm btn-danger float-right mx-2"
                          onClick={() => eliminarNotificacion(item.id)}
                        >Eliminar</button>
                        <button 
                          className="btn btn-sm btn-warning float-right"
                          onClick={() => editar(item)}
                        >Editar</button>
                      </li>
                    ))
                  )
                }
              </ul>
            </div>
            <div className="col-4">
              <h4 className="text-center">
                {
                  modoEdicion ? 'Editar aviso' : 'Agregar aviso'
                }
              </h4>
              <form onSubmit={modoEdicion ? editarNotificacion : agregarNotificacion}>
                {
                  error ? <span className="text-danger">{error}</span> : null
                }
                <input 
                  type="text" 
                  className="form-control mb-2"
                  placeholder="Ingrese aviso"
                  onChange={event => setAviso(event.target.value)}
                  value={aviso}
                />
                {
                  modoEdicion ? (
                    <button className="btn btn-warning btn-block" type="submit">Editar</button>
                  ) : (
                    <button className="btn btn-dark btn-block" type="submit">Agregar</button>
                  )
                }
              </form>
            </div>
          </div>
        </div>
    );
  }
  
  export default CrudAvisos;
  