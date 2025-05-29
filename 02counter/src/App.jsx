import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  //let counter = 15

  const addvalue = () => {
    console.log("clicked", counter);
    //counter = counter + 1 
    if(counter < 20){
      setCounter(counter+1)
    }
  }

  const removevalue = () => {
    console.log("clicked", counter);
    if(counter > 0){
    setCounter(counter-1);
    }
  }



  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick = {addvalue}>
        Add value</button>

      <br/>
      <br/>

      <button
      onClick = {removevalue}>
        remove value</button>

      <p>footer: {counter}</p>
    </>
  )
}

export default App
