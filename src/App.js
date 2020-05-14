import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TeamMembers from "./components/TeamMembers";
import TeamList from "./teamList";

function App() {
  const [teamMembers, setTeam] = useState(TeamList);

  const addTeamMember = (newMember) => {
    setTeam([...teamMembers, newMember]);
  };

  return (
    <div className="App">
      <TeamMembers teamList={teamMembers} addTeamMember={addTeamMember} />
    </div>
  );
}

export default App;
