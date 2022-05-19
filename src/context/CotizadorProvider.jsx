import { createContext } from 'react'

//context
const CotizadorContext = createContext()

//provider
const CotizadorProvider = ({children}) => {

  return(
    <CotizadorContext.Provider
      value={{hola}}
    >
      {children}
    </CotizadorContext.Provider>
  )
}

export {
  CotizadorProvider
}

export default CotizadorContext