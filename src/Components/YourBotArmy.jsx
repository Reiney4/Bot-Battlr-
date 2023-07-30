function YourBotArmy({ botArmy, setBotArmy, displayBots }) {

    // removes bot from botArmy when bot in botArmy is clicked
    const handleBotArmyClick = (botId) => {

        // filter returns new array with bots not matching the clickedBot (using !)
        const updatedBotArmy = botArmy.filter((bot) => {
            return bot.id !== botId
        })

        setBotArmy(updatedBotArmy);
    }

    return (
        <div className="p-10">
            <h3>Bot Army</h3>
            <div className="row row-cols-1 row-cols-md-5 g-3 m-4 pb-3 h-100 px-3 bot-army">
                {displayBots(botArmy, handleBotArmyClick)}
            </div>
        </div>
    )
}

export default YourBotArmy