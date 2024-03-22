import Paciente from './Paciente'

const ListadoPasientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll'>

      {pacientes && pacientes.length ? (
        <>
          <h2 className='font-black text-2xl text-center'>Listado Pacientes</h2>
          <p className="mt-1 text-center mb-5">
            Administra tus {''}
            <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
          </p>
    
          { pacientes.map( p => (
            <Paciente
              key={p.id}
              paciente={p}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className='font-black text-2xl text-center'>No hay pacientes</h2>
          <p className="mt-1 text-center mb-5">
            Comienza agregando pacientes {''}
            <span className='text-indigo-600 font-bold'>y aparecerán en este lugar</span>
          </p>
        </>
      )}
      
    </div>
  )
}

export default ListadoPasientes
