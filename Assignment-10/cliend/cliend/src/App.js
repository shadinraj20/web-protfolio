
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
import CreateEvents from './Components/CreateEvents/CreateEvents';
import CheckOut from './Components/CheckOut/CheckOut';
import AddProductsList from './Components/AddProducts/AddProducts';
import RegistrationAll from './Components/RegistrationAll/RegistrationAll';
import AddProducts from './Components/AddProducts/AddProducts';
import OrderDetails from './Components/OrderDetails/OrderDetails';


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
          <PrivateRoute exact path='/CreateEvents/:id'>
            <CreateEvents/>
          </PrivateRoute>
          <PrivateRoute exact path="/checkOut">
           <CheckOut/>
          </PrivateRoute>
          <PrivateRoute exact path="/RegistrationAll">
           <RegistrationAll/>
          </PrivateRoute>
          <PrivateRoute exact path="/AddProducts">
           <AddProducts/>
          </PrivateRoute>
          <Route exact path="/orderDetail">
           <OrderDetails/>
          </Route>
           <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
