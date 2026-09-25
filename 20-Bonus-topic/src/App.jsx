import React from 'react'
import { useState } from 'react'
import Navebar from './components/Navebar'

const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <div>

      <h1> {theme}Theam is light </h1>
      <Navebar/>
    </div>
  )
}

export default App