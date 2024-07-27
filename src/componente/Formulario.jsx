 import {useState} from 'react';
import Paciente from './Paciente';
import Error from './Error';
 
    const Formulario = ({ Pacientes, setPacientes }) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [numero, setNumero] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);
    
  
      const handleSubmit = (e) => {
        e.preventDefault();
        
        // validacion del formulario
        
        if([nombre,propietario,email,numero,alta,sintomas].includes('')){
          console.log('hay almenos un campo vacio')
          setError(true)
          return
        }
          setError(false)

          // ojeto de paciente
          const objetoPaciente={
            nombre,
            propietario,
            email,
            numero,
            alta,
            sintomas
          }
          
          // console.log(objetoPaciente)
          setPacientes([...Pacientes, objetoPaciente])
          // reiniciar el formulario
          setNombre('')
          setPropietario('')
          setEmail('')
          setNumero('')
          setAlta('')
          setSintomas('')
          setError('')
      }

  return (
    <div className="md:w-1/2 lg:w-2/5 md:mx-10 mx-5">

      <h2 className="font-black text-center md:mt-auto mt-10 md:text-3xl text-xl">
        Seguimiento Paciente
      </h2>
      
      <p className="text-lg font-medium text-center md:mt-5 mb-3 md:mb-10 md:text-2xl">
        Añade Pacientes y {''} 
      <samp className="text-indigo-800 font-bold">Administracion</samp>
      </p>

      <form 
      onSubmit={handleSubmit} 
      className="bg-white shadow-2xl rounded-xl py-10 px-5 mb-10">

          {error && <Error>
            <p>Todos los Campos son obligatorio</p>
            </Error>}

        <div className="mx-5">
            <label htmlFor="nombre" 
                    className="block font-bold text-gray-700 uppercase mx-3"> 
                    Nombre de Mascota 
            </label>

            <input 
            className="bg-indigo-200 text-black rounded-xl px-3 w-full m-2 p-2 shadow-lg font-bold" 
            type="text"
            id="nombre"
            placeholder="Nombre de Mascota"
            value={nombre}
            onChange={ (e) => setNombre(e.target.value)}/>
            
        </div>

        <div className=" my-3 mx-5">    
              <label htmlFor="propietario" 
                      className="block font-bold text-gray-700 uppercase mx-3">
                      nombre De propietario
              </label>

              <input 
                className="bg-indigo-200 text-black rounded-xl px-3 w-full m-2 p-2 shadow-lg font-bold" 
                type="text"
                id="propietario"
                placeholder="Nombre De Propietario"
                value={propietario}
            onChange={ (e) => setPropietario(e.target.value)}/>
                
        </div>

        <div className=" my-3 mx-5">
              <label htmlFor="email"
                     className="block font-bold text-gray-700 uppercase mx-3">
                      correo eletronico
              </label>

              <input 
                className="bg-indigo-200 text-black rounded-xl px-3 w-full m-2 p-2 shadow-lg font-bold" 
                type="email"
                id="email"
                placeholder="Email de Propietario"
                value={email}
            onChange={ (e) => setEmail(e.target.value)}/>
        </div>

        <div className=" my-3 mx-5">
              <label htmlFor="numero"
                     className="block font-bold text-gray-700 uppercase mx-3">
                    numero de tel/cel
              </label>

              <input 
                className="bg-indigo-200 text-black rounded-xl px-3 w-full m-2 p-2 shadow-lg font-bold" 
                type="tel"
                id="numero"
                placeholder="Numero del Propietario"
                value={numero}
            onChange={ (e) => setNumero(e.target.value)}/>
        </div>

        <div className=" my-3 mx-5">
              <label htmlFor="Alta" 
                      className="block font-bold text-gray-700 uppercase mx-3">
                      fecha de Alta
              </label>

              <input 
                className="bg-indigo-200 text-black rounded-xl px-3 w-full m-2 p-2 shadow-lg text-center font-bold" 
                type="date"
                id="Alta"
                value={alta}
                onChange={ (e) => setAlta(e.target.value)}
                />
        </div>

        <div className=" my-3 mx-5">
              <label htmlFor="sintomas" 
                    className="block font-bold text-gray-700 uppercase mx-3">
                    Sintomas
              </label>

              <textarea
                className="bg-indigo-200 text-black rounded-xl px-3 w-full m-2 p-2 shadow-lg" 
                id="sintomas"
                placeholder="Describa los Sintomas"
                value={sintomas}
                onChange={ (e) => setSintomas(e.target.value)}>
                  
              </textarea>
        </div>

              <button
               type="submit"
               className="bg-indigo-900 w-full rounded-xl py-2 text-white shadow-xl uppercase font-bold hover:bg-indigo-950"
               value="Agregar Paciente">
              Agregar paciente
              </button>
               
      </form>
    </div>
 )
  }
export default Formulario;
