import { Alert, Button } from '@mui/material';
import React, { useEffect, useState } from 'react'

const Contador = () => {
  const [contador, setContador] = useState(5)
  const [contadorAux, setContadorAux] = useState(false)
  const [mensagem, setMensagem] = useState("")

  const multiMes = () => {
    setContador(contador * contador)
  }

  useEffect(() => {
      if (contador > 12) {
        setContadorAux(true)
        setMensagem("O ano possui apenas 12 meses")
      }
      else {
        setContadorAux(false)
      }
    }, [contador]
  )

  // useEffect(
  //   () => {
  //     console.log("Fui chamado Aux")
  //   }, [contadorAux]
  // )

  return (
    <div>
      <div>Olá contador</div>
      <div>Meu mês de aniversário é: {contador}</div>
      <div>
        {contadorAux &&
          <Alert severity='error'>{mensagem}</Alert>
        }
        <Button onClick={() => { setContador(1) }}>Primeiro mês!</Button>
        <Button onClick={() => { setContador(contador + 1) }}>Acrescente um mês</Button>
        <Button onClick={() => { setContador(contador - 1) }}>Diminua um mês</Button>
        <Button onClick={multiMes}>Multiplica mês!</Button>
        <Button onClick={() => { setContador(12) }}>Último mês!</Button>
      </div>
    </div>
  )
}

export default Contador;