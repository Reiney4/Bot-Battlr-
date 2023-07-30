import { useState, useEffect } from 'react'
import './App.css'
import BotCollection from './Components/BotCollection'
import YourBotArmy from './Components/YourBotArmy'
import BotCard from './Components/BotCard'

function App() {
  const [originalBots, setOriginalBots] = useState([])
  const [botArmy, setBotArmy] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/bots').then((res) => res.json()).then((data) => {
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
    <>
      <YourBotArmy botArmy={botArmy} setBotArmy={setBotArmy} displayBots={displayBots}/>
      <BotCollection originalBots={originalBots} botArmy={botArmy} setBotArmy={setBotArmy} displayBots={displayBots} />
    </>
  )
}

export default App