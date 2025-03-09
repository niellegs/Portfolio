import "./Hobbies.css";

function Hobbies() {
    return (
        <div className="container_hobbies display-flex direction-column align-center justify-center">
            
            {/*<h2 className="title">Hobbies</h2>*/}
            <div className="hobbies display-flex justify-center align-center">
                <div className="hobbie display-flex align-center justify-center direction-column">
                    <i className="fa-solid fa-gamepad"></i>
                    <p>Jogos</p>
                </div>
                <div className="hobbie display-flex align-center justify-center direction-column">
                    <i className="fa-solid fa-dumbbell"></i>
                    <p>Academia</p>
                </div>
                <div className="hobbie display-flex align-center justify-center direction-column">
                    <i className="fa-solid fa-book"></i>
                    <p>Leitura</p>
                </div>
                <div className="hobbie display-flex align-center justify-center direction-column">
                    <i className="fa-solid fa-camera-retro"></i>
                    <p>Fotografia</p>
                </div>
            </div>
            
        </div>
    )
}

export default Hobbies;