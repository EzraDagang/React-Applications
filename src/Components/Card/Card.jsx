import "./Card.css";

function Card(){
    return(
        <div className="card">
            <img className="card-img" src="https://www.kosmo.com.my/wp-content/uploads/2022/08/AARON-WOOI1.jpg" alt="Aaron Chia and Soh Wooi Yik" />
            <h2 className="card-title">Ezra</h2>
            <p className="card-description">I am a software Engineering student at UM and play badminton.</p>
        </div>
    );
}

export default Card;