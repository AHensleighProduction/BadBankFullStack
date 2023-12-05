import React from "react";
import { UserContext } from "../context";
import Card from "./Card";
import {url } from "../App"
function Deposit({setCurrentUser}){ 
    const [status, setStatus]     = React.useState('');
    const [show, setShow]         = React.useState(true);
    const [amount, setAmount]         = React.useState(0);
    const ctx = React.useContext(UserContext);  

    
    function clearForm(){
    
      setShow(true);
      setAmount(0)
    }
  async function handleDeposit(){
  //update the user's bal in ctx.users
    //loop through the array of users
    try {
      const response = await fetch(`${url}/users/${ctx.loggedInUser._id}`, {
        method: "put" , 
        mode:"cors",
        headers:{
          "Content-Type": "application/json"
        } ,
        body: JSON.stringify({balance:ctx.loggedInUser.balance + Number(amount)})
      })
      const data = await response.json()
      console.log(data)
      setCurrentUser(data)
      setShow(false)
    } catch (error) {
      
    }
    
  
  }
  
    return (
      <Card
      bgcolor="white"
      header="Deposit"
      status={status}
      body={show ? (  
              <>
            { ctx.loggedInUser && <h3>current Balance: {ctx.loggedInUser.balance} </h3>}
             
              Amount<br/>
              <input type="text" className="form-control" id="amount" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleDeposit}>Deposit</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>New Deposit</button>
              </>
            )}
    />
    )
  }
  export default Deposit