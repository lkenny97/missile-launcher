import './App.css';
import Launcher from './launcher';
import firebase from "firebase/app";
// import { FirebaseDatabaseProvider } from "@react-firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyCmRV4g0sR4JYwjzHGg-AmISbCjAVi42P0",
  authDomain: "besafe-bedf9.firebaseapp.com",
  databaseURL: "https://besafe-bedf9-default-rtdb.firebaseio.com",
  projectId: "besafe-bedf9",
  storageBucket: "besafe-bedf9.appspot.com",
  messagingSenderId: "322016123608",
  appId: "1:322016123608:web:58556d23b08d04640115ad"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
      <Launcher />
      </header>
    </div>
  );
}

export default App;
