import { HiXMark } from "react-icons/hi2"
import { FaHeartbeat } from "react-icons/fa"
import { BsFillLightningFill, BsShieldShaded } from "react-icons/bs"

function BotCard({ bot, originalBots, handleBotClick, setOriginalBots, setBotArmy, botArmy }) {
    const { id, name, health, damage, armor, catchphrase, avatar_url } = bot;

    const handleXClick = (botId) => {
        fetch(`https://api.npoint.io/cef76c342ebde482885c/bots/${botId}`, {
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
        })
    }

    return (
        <div key={id} className="col bot-card">
            <div className="card h-100">
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