import { useState } from 'react'

import './App.css'
import FormBuilder from './components/FormBuilder/FormBuilder'
import Cards from './components/Cards/Cards'
// import Form from './compnents/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <FormBuilder/>
     {/* <Form/> */}
     <Cards/>

    </>
  )
}

export default App
