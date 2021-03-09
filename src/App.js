import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Friends from './Components/Friends/Friends';
import Details from './Components/Details/Details';
import { useEffect, useState } from 'react';
import Footer from './Components/Footer/Footer';
import Contacts from './Components/Contacts/Contacts';

function App() {
  const [friends,setFriends] = useState([]);
  const friendsList =()=>{
    const url = 'https://randomuser.me/api/?results=50'
    fetch(url)
    .then(res=>res.json())
    .then(data=> setFriends(data.results))
};

useEffect(friendsList,[])
  return (
    <div className="App">
      <div className="container">
      <Header></Header>
      <Router>
        <Switch>
          <Route path='/friends'>
          <Main friends={friends} />
            
            </Route>
            
             <Route path='/home'>
            <Main friends={friends}/>
          </Route> 
         
          <Route exact path='/'>
            <Main friends={friends}/>
          </Route>
          <Route path='/contacts'>
            <Contacts></Contacts>
            
          </Route>
          <Route path="/:first">
            <Details friends={friends}></Details>
          </Route>
          <Route path='*'>
            <h1 className='text-danger text-center mt-3'>404-link not found</h1>
          </Route>

        </Switch>
      </Router>
      <Footer></Footer>

      
    </div>
    </div>
  );
}

export default App;
