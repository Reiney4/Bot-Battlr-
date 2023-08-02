import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BotCollection from './Components/BotCollection';
import YourBotArmy from './Components/YourBotArmy';
import BotCard from './Components/BotCard';
import BotSpecs from './Components/BotSpecs';
import SortBar from './Components/SortBar';

function App() {
  const [originalBots, setOriginalBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  useEffect(() => {
    fetch('https://valerie.onrender.com/bots')
      .then((res) => res.json())
      .then((data) => {
        setOriginalBots(data);
      });
  }, []);

  const displayBots = (bots, handleBotClick) => {
    return bots.map((bot) => (
      <BotCard
        key={bot.id}
        bot={bot}
        originalBots={originalBots}
        botArmy={botArmy}
        setBotArmy={setBotArmy}
        handleBotClick={handleBotClick}
        setOriginalBots={setOriginalBots}
      />
    ));
  };

  const sortBotsByHealth = () => {
    const sortedBots = [...originalBots].sort((a, b) => b.health - a.health);
    setOriginalBots(sortedBots);
  };

  const sortBotsByDamage = () => {
    const sortedBots = [...originalBots].sort((a, b) => b.damage - a.damage);
    setOriginalBots(sortedBots);
  };

  const sortBotsByArmor = () => {
    const sortedBots = [...originalBots].sort((a, b) => b.armor - a.armor);
    setOriginalBots(sortedBots);
  };

  return (
    <BrowserRouter>
      <YourBotArmy botArmy={botArmy} setBotArmy={setBotArmy} displayBots={displayBots} />
      <SortBar onSortByHealth={sortBotsByHealth} onSortByDamage={sortBotsByDamage} onSortByArmor={sortBotsByArmor} />
      <Routes>
        <Route
          path="/"
          element={<BotCollection originalBots={originalBots} botArmy={botArmy} setBotArmy={setBotArmy} displayBots={displayBots} />}
        />
        <Route path="/:currentBotId" element={<BotSpecs originalBots={originalBots} botArmy={botArmy} setBotArmy={setBotArmy} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;