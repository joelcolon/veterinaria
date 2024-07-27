const Error = ({children}) => {
  return (
    <div className="bg-red-900 p-2 rounded-xl text-center text-white uppercase md:font-bold font-medium shadow-lg mb-5 md:mx-10">
      {children}
  </div>
  )
}

export default Error
