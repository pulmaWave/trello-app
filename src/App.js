import React from 'react'
import './App.scss'

// Import components
import Navbar from 'components/NavBar/Navbar'
import BoardBar from 'components/BoardBar/BoardBar'
import BoardContent from 'components/BoardContent/BoardContent'

function App() {
  return (
    <div className="App">
      <Navbar />
      <BoardBar />
      <BoardContent />
    </div>
  )
}
export default App
