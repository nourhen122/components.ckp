import logo from './logo.svg';
import './App.css';
import First from './components/ProfilPhoto';
import ProfilPhoto from './components/ProfilPhoto';
import FullName from './components/FullName';
import Adress from './components/Adress';

function App() {
  return (
    <div className="App">
      <ProfilPhoto/>
      <FullName/>
      <Adress/>
    </div>
  );
}

export default App;
