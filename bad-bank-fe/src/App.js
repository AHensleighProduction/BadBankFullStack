import Navbar from "./components/Navbar"
import { BrowserRouter,Route, Routes } from "react-router-dom";
import{UserContext} from "./context"
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import CreateAccount from "./components/CreateAccount";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import AllData from "./components/Alldata";
import { useEffect, useState } from "react";
//export const url = "http://localhost:5001"
export const url = "https://bad-bank-full-stack.onrender.com"
function App() {
  const [currentUser , setCurrentUser] = useState(null)

  useEffect(()=>{
const userFromStorage = localStorage.getItem("bank User")
if(userFromStorage ) {
  setCurrentUser(JSON.parse(userFromStorage))
}
  } , [])
  return (
    <BrowserRouter>
    <Navbar currentUser= {currentUser} setCurrentUser = {setCurrentUser}/>
    <UserContext.Provider value = {{loggedInUser: currentUser, }}>
    <div className="App">
    <Routes>
      <Route path ="/" element = {<Home/>}/>
      <Route path ="/login" element = {<Login setCurrentUser = {setCurrentUser}/>}/>
      <Route path ="/create-account" element = {<CreateAccount setCurrentUser = {setCurrentUser}/>}/>
      <Route path ="/deposit" element = {<Deposit setCurrentUser = {setCurrentUser}/>}/>
      <Route path ="/withdraw" element = {<Withdraw setCurrentUser = {setCurrentUser}/>}/>
      <Route path ="/all-data" element = {<AllData/>}/>
     </Routes>
    </div>
    </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
