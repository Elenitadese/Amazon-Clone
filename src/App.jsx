import { useState } from 'react'

import './App.css'
import Home from './Home'
import RauterPage from './Pages/RauterPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home /> */}
      {/* All the routes below */}
      <RauterPage />
    </>
  );
}

export default App
