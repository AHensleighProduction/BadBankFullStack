import React from "react";
import { UserContext } from "../context";
import Card from "./Card";
import {url } from "../App"
function Login({setCurrentUser}){
    const [show, setShow]         = React.useState(true);
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const [status, setStatus]     = React.useState('');
    const ctx = React.useContext(UserContext);  
  
    function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }
  
  async function handleLogin(){
  
  
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    // send post request to server wiuth login informaiton
    try {
      const response = await fetch(`${url}/users/login`, {
        method: "post" , 
        mode:"cors",
        headers:{
          "Content-Type": "application/json"
        } ,
        body: JSON.stringify({email, password})
      })
      const data = await response.json()
      console.log(data)
      setCurrentUser(data)
      setShow(false)
      localStorage.setItem("bank User" , JSON.stringify(data))
      
    } catch (error) {
      
    }

  }    
  
  function clearForm(){
    
    setEmail('');
    setPassword('');
    setShow(true);
  }
  
    return (
      <Card
      bgcolor="primary"
      header="Log In"
      status={status}
      body={show ? (  
              <>
             
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleLogin}>Login</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Switch Accounts</button>
              </>
            )}
    />
    )  
  }
  export default Login