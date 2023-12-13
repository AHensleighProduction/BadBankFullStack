import React from "react";
import { UserContext } from "../context";
import Card from "./Card";
import {url } from "../App"

function Withdraw({setCurrentUser}){
    const [status, setStatus]     = React.useState('');
    const [show, setShow]         = React.useState(true);
    const [amount, setAmount]         = React.useState("");
    const ctx = React.useContext(UserContext);  
   
  
  
      function clearForm(){
    
        setShow(true);
        setAmount(0)
      }
  
      async function handleWithdraw(){
        if (!amount) {
          setStatus('Error: Please enter an amount');
          setTimeout(() => setStatus(''),3000);
          return;
        }
        if (isNaN(amount)) {
          setStatus('Error: Please enter a numerical value');
          setTimeout(() => setStatus(''),3000);
          return;
        }
        if (Number(amount)<0) {
          setStatus('Error: Please enter a positive amount');
          setTimeout(() => setStatus(''),3000);
          return;
        }
  // check if the balance is greater than withdraw amount
  if(ctx.loggedInUser.balance >= Number(amount)){
    try {
      const response = await fetch(`${url}/users/${ctx.loggedInUser._id}`, {
        method: "put" , 
        mode:"cors",
        headers:{
          "Content-Type": "application/json"
        } ,
        body: JSON.stringify({balance:ctx.loggedInUser.balance - Number(amount)})
      })
      const data = await response.json()
      console.log(data)
      setCurrentUser(data)
      setShow(false)
    } catch (error) {
      
    }

  } else{
    setStatus("Insufficient Funds")
    setAmount("")
  
  }
  
        //if it is then proceed
        //otherwise show error message 
  // find total balance
  // subtract withdraw amount
      }
      return (
        <Card
        bgcolor="white"
        header="withdraw"
        status={status}
        body={show ? (  
                <>
              { ctx.loggedInUser && <h3>current Balance: {ctx.loggedInUser.balance} </h3>}
               
                Amount<br/>
                <input type="text" className="form-control" id="amount" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>
                <button className="btn btn-light" onClick={handleWithdraw}>Withdraw</button>
                </>
              ):(
                <>
                <h5>Success</h5>
                <button className="btn btn-light" onClick={clearForm}>New Withdraw </button>
                </>
              )}
      />
      )
    
  }
  export default Withdraw