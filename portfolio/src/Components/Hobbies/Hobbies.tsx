import "./Hobbies.css";

/* ASSETS*/
import GameLogo from "../../assets/game.svg"
import GymLogo from "../../assets/gym.svg"
import BookLogo from "../../assets/book.svg"
import CameraLogo from "../../assets/camera.svg"


function Hobbies() {
    return (
        <div className="container_hobbies">
            <h2>Hobbies</h2>
            <div className="hobbies display-flex justify-center align-center">
                <div className="hobbie display-flex align-center justify-center direction-column">
                    <img src={GameLogo} alt="" />
                    <p>Jogos</p>
                </div>
                <div className="hobbie display-flex align-center justify-center direction-column">
                    <img src={GymLogo} alt="" />
                    <p>Academia</p>
                </div>
                <div className="hobbie display-flex align-center justify-center direction-column">
                    <img src={BookLogo} alt="" />
                    <p>Leitura</p>
                </div>
                <div className="hobbie display-flex align-center justify-center direction-column">
                    <img src={CameraLogo} alt="" />
                    <p>Fotografia</p>
                </div>
            </div>
        </div>
    )
}

export default Hobbies;