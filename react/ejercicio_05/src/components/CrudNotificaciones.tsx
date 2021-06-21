import React, {useState} from 'react';
import shortid from 'shortid' ;

function CrudNotificaciones() {

    interface INotificacion {
      value: string; 
      id: string;
    }
    
    const [notificacion, setNotificacion] = useState<string>('')
    const [notificaciones, setNotificaciones] = useState < (INotificacion)[]> ([]);
    const [error, setError] = useState<string>('')
    const [id, setId] = useState<string>('')
    const [modoEdicion, setModoEdicion] = useState(false)



    const agregarNotificacion = (event: React.SyntheticEvent) => {
        event.preventDefault();

        if(!notificacion.trim()){
          setError('El campo no puede estar Vacío')
          return
        }
          setNotificaciones([...notificaciones, { value: notificacion, id:shortid.generate() }]);

        setError('')
        setNotificacion('')
    }

    const editar = (item:INotificacion) => {
      setModoEdicion(true)
      setNotificacion(item.value)
      setId(item.id)
    }


    const editarNotificacion = (event: React.SyntheticEvent)  => {
        event.preventDefault()

        if(!notificacion.trim()){
          console.log('Campo vacio')
          setError('El campo no puede estar vacío')
          return
        }

        var arrayNot:INotificacion[]  = notificaciones.map(item => item.id === id ? {value: notificacion, id:id} : item);

        setNotificaciones(arrayNot)
        setModoEdicion(false)
        setNotificacion('')
        setId('')
        setError('')
    }

    const eliminarNotificacion = (id:string) => {

      var arrayNot:INotificacion[] = notificaciones.filter(item => item.id !== id)

      setNotificaciones(arrayNot)
    }


    return (
      <div className="container mt-5">
          <div className="row">
            <div className="col-8">
              <h4 className="text-center">NOTIFICACIONES</h4>
              <ul className="list-group">
                {
                  notificaciones.length === 0 ? (
                    <li className="list-group-item">No hay notificaciones</li>
                  ) : ( 
                    
                    notificaciones.map(item => (
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
                  modoEdicion ? 'Editar notificación' : 'Agregar notificación'
                }
              </h4>
              <form onSubmit={modoEdicion ? editarNotificacion : agregarNotificacion}>
                {
                  error ? <span className="text-danger">{error}</span> : null
                }
                <input 
                  type="text" 
                  className="form-control mb-2"
                  placeholder="Ingrese notificación"
                  onChange={event => setNotificacion(event.target.value)}
                  value={notificacion}
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
  
  export default CrudNotificaciones;
  