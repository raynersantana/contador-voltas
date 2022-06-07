import React, { useState, useEffect } from 'react'
import './styles.css'
import MostrarVoltas from './MostrarVoltas'
import MostrarTempo from './MostrarTempo'
import Button from './Button'

function App() {

  const [numVoltas, setNumVoltas] = useState(0)
  const [tempo, setTempo] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    let timer = null
    if(running) {
      timer = setInterval(() => {
        setTempo(old => old + 1)
      }, 1000)
    }
    return () => {
      if(timer) {
        clearInterval(timer)
      }
    }
  }, [running])

  const toggleRunning = () => {
    setRunning(!running)
  }

  const increment = () => {
    setNumVoltas(numVoltas + 1)
  }

  const decrement = () => {
    if(numVoltas === 0) {
      //do nothing
    }else setNumVoltas(numVoltas - 1)
  }

  const resetTiming = () => {
    setTempo(0)
    setNumVoltas(0)
  }

  return (
    <div className="App">
      <MostrarVoltas voltas={numVoltas} />
      {
        numVoltas > 0 && <MostrarTempo tempo={Math.round(tempo/numVoltas)} /> 
      }
      <Button onClick={increment} text='+'/>
      <Button onClick={decrement} text='-'/><br/><br/>
      <Button onClick={toggleRunning} text='Iniciar'/>
      <Button onClick={resetTiming} text='Reiniciar'/>
    </div>
  )
}

export default App;