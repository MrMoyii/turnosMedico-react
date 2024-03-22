import { useState, useEffect } from "react"
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false)
 
  useEffect(() => {
      if(Object.keys(paciente).length > 0) {
        setNombre(paciente.nombre);
        setPropietario(paciente.propietario);
        setEmail(paciente.email);
        setAlta(paciente.alta);
        setSintomas(paciente.sintomas);
      }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if([nombre, propietario, email, alta, sintomas].includes('')) {
      setError(true);
      return;
    }
    setError(false);

    const objPaciente = {
      nombre,
      propietario,
      email,
      alta,
      sintomas
    }

    if(paciente.id) {
      //editar el registro
      objPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState)
      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      //nuevo registro
      objPaciente.id = generarId();
      setPacientes([...pacientes, objPaciente]);
    }


    //reiniciar form
    setNombre('');
    setPropietario('');
    setEmail('');
    setAlta('');
    setSintomas('');
  }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h1 className='font-black text-2xl text-center'>Seguimiento Pacientes</h1>

      <p className="mt-1 text-center mb-5">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-5 px-5 mb-5">
        { error && <Error><p>Todos los campos son obligatorios</p></Error>}
        <div className="mb-3">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-1 rounded-md"
            value={nombre}
            onChange={ (e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-1 rounded-md"
            value={propietario}
            onChange={ (e) => setPropietario(e.target.value)}  
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de contacto del Propietario"
            className="border-2 w-full p-2 mt-1 rounded-md"
            value={email}
            onChange={ (e) => setEmail(e.target.value)}  
          />
        </div>
        <div className="mb-3">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-1 rounded-md"
            value={alta}
            onChange={ (e) => setAlta(e.target.value)}  
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-1 rounded-md"
            placeholder="Describe los Sintomas"
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full rounded-md p-2 text-white uppercase font-bold
                     hover:bg-indigo-700 cursor-pointer transition-all"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />

      </form>
    </div>
  )
}

export default Formulario
