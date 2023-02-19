import './NBACard.css';
import Team from './Team';

//This script designs the cards themselves. Taking the data needed from the API's and putting
//it into the card design


const NBACard = ({ userData }) => {
    return (
        <div className="card">
            <div className="card__title">{userData.first_name} {userData.last_name}</div>
            <div className="card__body">
                <h>Position - </h>{userData.position}<br/>
                <h><u>Team Information</u></h>
                <Team team={userData.team}/>        
                
            </div>

        </div>
    )
};

export default NBACard;