import {BrowserRouter as Router,Route} from 'react-router-dom'
import Navb from './component/navbar'
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/user/Login';
import Signup from './Pages/user/Signup';

function App() {
  return (
    <div className="App">
      <Navb/>
     <Router>
        <Route exact path = '/' component = {Home}/>
        <Route path ='/login' component = {Login}/>
        <Route path ='/signup' component = {Signup}/>
     </Router>
    </div>
  );
}

export default App;
