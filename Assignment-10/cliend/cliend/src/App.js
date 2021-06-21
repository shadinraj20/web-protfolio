
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import LogIn from './Components/LogIn/LogIn';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import CheckOut from './Components/CheckOut/CheckOut';
import Order from './Components/Order/Order';
import AddProductsList from './Components/AddProducts/AddProducts';
import RegistrationAll from './Components/RegistrationAll/RegistrationAll';
import AddProducts from './Components/AddProducts/AddProducts';
import CheckOutDetail from './Components/CheckOutDetail/CheckOutDetail';


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/login">
            <LogIn/>
          </Route>
          <PrivateRoute exact path='/CheckOut/:id'>
            <CheckOut/>
          </PrivateRoute>
          <PrivateRoute exact path="/order">
           <Order/>
          </PrivateRoute>
          <PrivateRoute exact path="/RegistrationAll">
           <RegistrationAll/>
          </PrivateRoute>
          <PrivateRoute exact path="/AddProducts">
           <AddProducts/>
          </PrivateRoute>
          <PrivateRoute exact path="/CheckOutDetail/:id">
           <CheckOutDetail/>
           </PrivateRoute>
           <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
