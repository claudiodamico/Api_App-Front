import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar'
import Teams from './components/Teams'



function App() {

  const [teams, setTeams] = useState([])

  const TeamsUrl = "http://localhost:5167/api/equipos";

  const fetchTeams = (url) => { 
    fetch(url)
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.log(error))
 
  };
  
  useEffect(() => {
    fetchTeams(TeamsUrl);
  }, []);

  return (
    <>
    <Navbar brand="Api App" />

    <div className="container mt-5">
    <p className='title' style={{fontSize: "30px", fontFamily: "bold"}}>EQUIPOS CON MAS TITULOS</p>
      <Teams teams={teams} />
    </div>
    </>
    
    
  );
}

export default App;
