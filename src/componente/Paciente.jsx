const Paciente = (paciente) => {
    
  return (
    <div>
      
      <div className="bg-white px-5 mx-10 my-5 py-10 rounded-xl shadow-2xl font-bold uppercase">
        
                <p className="font-bold mb-3 text-gray-600"  >Nombre: {''}
                    <samp className="font-norma text-indigo-500 text-lg normal-case">nombre</samp>
                </p>


                <p className="font-bold mb-3 text-gray-600">PROPIETARIO: {''}
                    <samp className="font-norma text-indigo-500 text-lg normal-case"> joel</samp>
                </p>


                <p className="font-bold mb-3 text-gray-600">CORREO ELETRONICO: {''}
                    <samp className="font-norma text-indigo-500 text-lg normal-case"> correo@correo</samp>
                </p>


                <p className="font-bold mb-3 text-gray-600">TEL/CEL: {''}
                    <samp className="font-norma text-indigo-500 text-lg normal-case"> 222-222-2222</samp>
                </p>


                <p className="font-bold mb-3 text-gray-600">FECHA DE ALTA: {''}
                    <samp className="font-norma text-indigo-500 text-lg normal-case"> 1/1/2023</samp>
                </p>


                <p className="font-bold mb-3 text-gray-600">SINTOMAS: {''}
                    <samp className="font-norma text-indigo-500 text-lg normal-case"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. temporibus cupiditate fugiat culpa hic quaerat esse ullam!</samp>
                </p>

            </div>
    </div>
  )
}

export default Paciente
