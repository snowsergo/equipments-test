import './App.css';
import {Route, Switch} from 'react-router-dom'
import Checks from './containers/Cheks/Checks'
import Checklists from './containers/Checklists/Checklists'
import Equipment from './containers/Equipment/Equipment'


function App() {
  
  return (
    <div className="App">
        <Switch>
          <Route path="/checks" component ={Checks}/>
          <Route path="/checklists" component ={Checklists}/>
          <Route path="/equipment" component ={Equipment}/>
          <Route path="/" component ={Checks}/>
        </Switch>
    </div>
  );
}

export default App;
