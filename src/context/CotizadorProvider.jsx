import { useState, createContext } from 'react'

//context
const CotizadorContext = createContext()

//provider
const CotizadorProvider = ({children}) => {


  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: ''
  })

  const handleChangeDatos = e => {
    setDatos({
      ...datos,
      [e.target.name] : e.target.value
    })
  }


  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
}

export {
  CotizadorProvider
}

export default CotizadorContext