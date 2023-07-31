import { useNavigate } from "react-router-dom";

function BotCollection({ originalBots, displayBots }) {
    // initialize navigate function for routing to taking to a given path or page
    const navigate = useNavigate();

    const handleBotClick = (botId) => {
        // the function called takes browser to go to the path i.e https://localhost:5173/${botId}, for example https://localhost:5173/104
        navigate(`/${botId}`)
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