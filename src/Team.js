import './Team.css';

//these are the team attributes to be shown on the card.
//Since the json file had more than one component for team
//this is how I did it to display certain components



const Team = ({ team }) => {
  return <div className="team">
      <p>{team.city}</p>
      <p>{team.abbreviation}</p>
      <p>{team.division}</p>
      
    </div>;
}
export default Team;