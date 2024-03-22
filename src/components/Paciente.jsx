import React from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar este paciente?');
    if(respuesta) { eliminarPaciente(paciente.id) }
  }

  return (
    <div className='mx-5 mb-3 bg-white shadow-md rounded-lg py-5 px-5 flex'>
      <div className='w-2/3'>
        <p className='font-bold mb-2 text-gray-700 uppercase'>Nombre: {''}
          <span className='font-normal normal-case'>{paciente.nombre}</span>
        </p>
        <p className='font-bold mb-2 text-gray-700 uppercase'>Propietario: {''}
          <span className='font-normal normal-case'>{paciente.propietario}</span>
        </p>
        <p className='font-bold mb-2 text-gray-700 uppercase'>Email: {''}
          <span className='font-normal normal-case'>{paciente.email}</span>
        </p>
        <p className='font-bold mb-2 text-gray-700 uppercase'>Alta: {''}
          <span className='font-normal normal-case'>{paciente.alta}</span>
        </p>
        <p className='font-bold mb-2 text-gray-700 uppercase'>Sintomas: {''}
          <span className='font-normal normal-case'>{paciente.sintomas}</span>
        </p>
      </div>
      <div className='block self-center text-end'>
        <button
          type='button'
          className='py-1 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg h-10 w-28 mb-5'
          onClick={ () => setPaciente(paciente) }
        >
          Editar
        </button>
        <button
          type='button'
          className='py-1 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg h-10 w-28'
          onClick={ handleEliminar }
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default Paciente
