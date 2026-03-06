import "./App.css";
import myData from "./CollegeBasketBallTeams.json";

function Welcome() {
  return (
    <>
      <h1>March Madness is upon us</h1>
      <h2>View all the Teams and their info below</h2>
    </>
  );
}

function Team({
  school,
  name,
  city,
  state,
}: {
  school: string;
  name: string;
  city: string;
  state: string;
}) {
  return (
    <>
    <h3>==================</h3>
      <h3>{school} {name}</h3>
      <h4></h4>
      <h4>
        {city}, {state}
      </h4>
    </>
  );
}

function TeamList() {
  return (
    <>
      {myData.teams.map((singleTeam) => (
        <Team
          school={singleTeam.school}
          name={singleTeam.name}
          city={singleTeam.city}
          state={singleTeam.state}
        />
      ))}
    </>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <TeamList />
    </>
  );
}

export default App;
