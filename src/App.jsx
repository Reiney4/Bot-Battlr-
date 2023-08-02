import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import BotCollection from './Components/BotCollection'
import YourBotArmy from './Components/YourBotArmy'
import BotCard from './Components/BotCard'
import BotSpecs from './Components/BotSpecs'
import SortBar from './Components/SortBar'

// implemented useState  
function App() {
  const [originalBots, setOriginalBots] = useState([])
  const [botArmy, setBotArmy] = useState([])

  useEffect(() => {
    fetch('https://valerie.onrender.com/bots').then((res) => res.json()).then((data) => {
        setOriginalBots(data)
    })
}, [])

  const displayBots = (bots, handleBotClick) => {
    const newBotsArray = bots.map((bot) => {
      return (
          <BotCard key={bot.id} bot={bot} originalBots={originalBots} botArmy={botArmy} setBotArmy={setBotArmy} handleBotClick={handleBotClick} setOriginalBots={setOriginalBots}/>
      )
    })

    return newBotsArray
  }

  return (
    <BrowserRouter>
      <YourBotArmy botArmy={botArmy} setBotArmy={setBotArmy} displayBots={displayBots}/>
        
      <Routes>
        <Route path="/" element={<BotCollection originalBots={originalBots} botArmy={botArmy} setBotArmy={setBotArmy} displayBots={displayBots} />} />
        {/* the :currentBotId show that anything after / is a value stored in currentBotId variable */}
        <Route path="/:currentBotId" element={<BotSpecs originalBots={originalBots} botArmy={botArmy} setBotArmy={setBotArmy} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App