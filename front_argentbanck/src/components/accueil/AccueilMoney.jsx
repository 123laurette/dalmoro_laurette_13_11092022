import money from "../../assets/icon-money.png"
import  "./Accueil.css"

function AccueilMoney() {
    return (
        <div className="feature-item">
            <img
                src={money}
                alt="Chat Icon"
                className="feature-icon"
            />
            <h3 className="feature-item-title">More savings means higher rates</h3>
            <p>
                The more you save with us, the higher your interest rate will be!
            </p>
        </div>
    )
}

export default AccueilMoney;