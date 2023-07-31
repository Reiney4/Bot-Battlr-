import { HiXMark } from "react-icons/hi2"
import { FaHeartbeat } from "react-icons/fa"
import { BsFillLightningFill, BsShieldShaded } from "react-icons/bs"
import { useNavigate } from "react-router-dom";

function BotCard({ bot, originalBots, handleBotClick, setOriginalBots, setBotArmy, botArmy }) {
    const { id, name, health, damage, armor, catchphrase, avatar_url } = bot;
    const navigate = useNavigate();

    const handleXClick = (botId) => {
        fetch(`https://api.npoint.io/f00577dbaab0488ccfcd/bots/${botId}`, {
            method: "DELETE"
        }).then(res => res.json())
        .then(() => {
            const filteredOriginalBots = originalBots.filter((oneBot) => {
                return oneBot.id !== bot.id
            })

            const filteredArmyBots = botArmy.filter((oneBot) => {
                return oneBot.id !== bot.id
            })

            setBotArmy(filteredArmyBots)
            setOriginalBots(filteredOriginalBots)

            // redirect to homepage having botscollection after deleting the bot
            navigate('/')
        })
    }

    return (
        <div key={id} className="col bot-card">
            <div className="card h-90">
                {/* X mark icon styling */}
                <div style={{ display: "flex", justifyContent: "right" }}>
                    <div className="xmark-box" onClick={() => { handleXClick(id) }}>
                        <HiXMark color="red" size="2rem"/>
                    </div>
                </div>

                <div className="card-main-details" onClick={() => { handleBotClick(id) }}>
                    <img src={avatar_url} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{catchphrase}</p>
                    </div>
                    <div className="card-footer">
                        <FaHeartbeat/> {health} <BsFillLightningFill/> {damage} <BsShieldShaded /> {armor}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BotCard