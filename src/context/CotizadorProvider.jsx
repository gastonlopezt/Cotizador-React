import { useState, createContext } from 'react'
import {
  obtenerDiferenciaYear,
  calcularMarca,
  calcularPlan,
  formatearDinero,
} from "../helpers";

//context
const CotizadorContext = createContext()

//provider
const CotizadorProvider = ({children}) => {


  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: ''
  })

  const [error, setError] = useState('')
  const [resultado, setResultado] = useState(0)


  const handleChangeDatos = e => {
    setDatos({
      ...datos,
      [e.target.name] : e.target.value
    })
  }

  const cotizarSeguro = () => {

    //base 
    let resultado = 2000

    //Obtener dif de años
    const diferencia = obtenerDiferenciaYear(datos.year)
    
    //Hay que restar el 3% cada año
    resultado -= ((diferencia * 3) * resultado) / 100

    //Europeo 30%
    //Americano 15%
    //Asiatico 5%
    resultado *= calcularMarca(datos.marca)
    //Basico 20%
    //Completo 50%
    resultado *= calcularPlan(datos.plan)
   
    //Formatear
    resultado = formatearDinero(resultado)
    setResultado(resultado)
    console.log(resultado)
  }

  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos,
        error,
        setError,
        cotizarSeguro,
        resultado
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