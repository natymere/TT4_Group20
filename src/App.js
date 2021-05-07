import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import TransactionHistory from './components/TransactionHistory';
import TransactionPage from './components/TransactionPage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/Login" component={LoginPage} />
          <Route exact path="/Transactionhistory" component={TransactionHistory} />
          <Route exact path="/Transaction" component={TransactionPage} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
