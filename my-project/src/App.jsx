import { useState } from 'react'

import './App.css'
import FormBuilder from './compnents/FormBuilder/FormBuilder'
// import Form from './compnents/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <FormBuilder/>
     {/* <Form/> */}

    </>
  )
}

export default App
