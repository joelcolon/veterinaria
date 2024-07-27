import {useState} from "react";
import Header from "./componente/Header";
import Formulario from "./componente/formulario";
import ListadoPacientes from "./componente/listadoPacientes";


function App() {

  const [Pacientes, setPacientes] =useState([]);

  return (


    <div className="container mx-auto mt-1 md:mt-10">
    
        <Header/>
        
      <div className="md:mt-20 mt-5 mx-auto inline-block md:flex">
        <Formulario
        Pacientes={Pacientes}
        setPacientes={setPacientes}
        />

        <ListadoPacientes
        Pacientes={Pacientes}
        />

      </div>
    
    </div>
    
  )
}

export default App;