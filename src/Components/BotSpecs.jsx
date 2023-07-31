import { FaHeartbeat } from "react-icons/fa"
import { BsFillLightningFill, BsShieldShaded } from "react-icons/bs" 
import { Link, useNavigate } from "react-router-dom"   
import { useParams } from "react-router-dom"

function BotSpecs({ botArmy, originalBots, setBotArmy}) {
    const navigate = useNavigate();

    // retreive currentBotId variable from path parameters i.e in https://localhost:5173/${currentBotId},
    // for example from https://localhost:5173/105  where 105 is currentBotId
    const { currentBotId } = useParams();

    const currentBot = originalBots.find((oneBot) => {
        // convert currentBotId to integer from string and return the bot in collection matching the id
        return oneBot.id === parseInt(currentBotId)
    })

    const { name, catchphrase, avatar_url, bot_class , health, damage, armor } = currentBot;

    // this function was moved here from BotCollection compoenent instead so that when enlist button is clicked, it adds bot to army
    const handleEnlistBtnClick = (botId) => {
        // convert botId from url path, string to an integer
        botId = parseInt(botId)
    
        // *find* returns the entire item (bot) if the condition passes (bot id matches)
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

        // After adding bot to botArmy, go back to bots Collection page by using 'useNavigate' hook
        navigate('/')
    }

    return (
        <div className="card h-90">
            {/* X mark icon styling */}

            <div className="card-main-details d-flex justify-content-center">
                <div className="left-details-part">
                    <img src={avatar_url} className="card-img-top" alt="..."/>
                </div>

                <div className="right-details-part text-left">
                    <h4>Name: {name}</h4>
                    <div className="card-body">
                        <h5 className="card-title">Catchphrase</h5>
                        <p className="card-text">{catchphrase}</p>
                    </div>
                    <h5 className="card-title">Class: {bot_class}</h5>
                    <div className="card-footer">
                        <FaHeartbeat/> {health} <BsFillLightningFill/> {damage} <BsShieldShaded /> {armor}
                    </div>
                    <Link to="/" className="btnGoBack d-block my-3 w-100">Go Back</Link>
                    {/* add onClick handler to enlist button which will add bot to army when clicked */}
                    <button onClick={() => { handleEnlistBtnClick(currentBotId) }} className="btnEnlist d-block mb-4 w-100">Enlist</button>
                </div>
            </div>
        </div>

    )
}

export default BotSpecs;