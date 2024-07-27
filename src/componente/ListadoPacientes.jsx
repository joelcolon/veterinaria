import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes})=>{
        console.log(pacientes);

    return(
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            <h2 className="font-black text-center md:mt-auto mt-10 md:text-3xl text-xl"> Listado Paciente</h2>


             <p className="text-lg font-medium text-center md:mt-5 mb-3 md:mb-10 md:text-2xl">Administrar {' '} 
                <samp className="text-indigo-800 font-bold">Citas y Pacientes</samp>
            </p>
            
                <Paciente/>
             
            

        </div>
    )
}

export default ListadoPacientes;