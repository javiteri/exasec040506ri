import logo from './logo.svg';
import './App.css';
//import Clock from './components/container/clockoriginal';
import ContactListComponent from './components/container/contactlistcomponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Evaluacion React 02 Sec 04-06 </p>
        <ContactListComponent></ContactListComponent> 
      </header>
    </div>  
  );
}

export default App;
