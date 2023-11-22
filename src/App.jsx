import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Componentes/card'
import Cards from './Componentes/cards'

function App() {
  const [count, setCount] = useState(0)

  return <Cards/>;
}

export default App
