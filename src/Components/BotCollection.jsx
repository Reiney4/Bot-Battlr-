import {useEffect, useState} from "react";

function BotCollection({ originalBots, botArmy, setBotArmy, displayBots }) {
    const handleBotClick = (botId) => {
    
        // *find* returns the entire item (bot) if condition passes (bot id matches)
        const clickedBot = originalBots.find((bot) => {
            return bot.id === botId
        })

        // *some* returns true if clicked bot is in army otherwise returns false
        const clickedBotIsInArmy = botArmy.some((bot) => {
            return bot.id === botId
        })

        // use ! (not operator) to see if clickedBot is not in army (return opposite)
        if (!clickedBotIsInArmy) {
           setBotArmy([...botArmy, clickedBot])
        }
    }
    
    return (
        <div>
            <h3>Bots Collection</h3>
            <div className="row row-cols-1 row-cols-md-4 g-3">            
                {displayBots(originalBots, handleBotClick)}
            </div>
        </div>
    )
}

export default BotCollection;