import './App.css';
import {Route, Switch} from 'react-router-dom'
import Checks from './containers/Cheks/Checks'
import Checklists from './containers/Checklists/Checklists'
import Equipment from './containers/Equipment/Equipment'


function App() {
  
  return (
    <div className="App">
        <Switch>
          <Route exact path="/checks" component ={Checks}/>
          <Route exact path="/checklists" component ={Checklists}/>
          <Route  exact path="/equipment" component ={Equipment}/>
          <Route path="/" component ={Checks}/>
        </Switch>
    </div>
  );
}

export default App;
