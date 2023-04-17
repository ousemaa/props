import logo from './logo.svg';
import './App.css';
import Profile from "./components/Profile";

function App() {
  const personne = {
    name: "Oussama Ben Mesmia",
    bio: "web developper",
    profession: "etudiant",
    img: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg",
  };
  const handleName = (x) => {
    alert(x);
  };
  return (
    <div className="App">
      <Profile personne={personne} handlname={handleName}>
        <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg" />
      </Profile>
    </div>
  );
}

export default App;
