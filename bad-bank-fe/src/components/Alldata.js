import React, {useState, useEffect} from "react";

import {url } from "../App"

function AllData(){

  const [users , setUsers] = useState([])

  useEffect(()=>{
    async function getUsers(){
      try {
        const response = await fetch(`${url}/users/`, {
          method: "get" , 
          mode:"cors",
          headers:{
            "Content-Type": "application/json"
          } ,
          
        })
        const data = await response.json()
        console.log(data)
     setUsers(data)
      } catch (error) {
        
      }
    }
    getUsers()
  }, [])
    return (
      <div>
      <h5 style = {{color:"white"}}>All Data in Store</h5>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user)=>{
            return(
              <tr key = {user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.balance}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      </div>
    );
  }
  export default AllData
  