import React, {useState, useEffect, useContext} from "react";
import { UserContext } from "../context";
import {url } from "../App"

function AllData(){
const {loggedInUser} = useContext(UserContext)
  const [users , setUsers] = useState([])

  useEffect(()=>{
    async function getUsers(){
      try {
        const response = await fetch(`${url}/users/admin`, {
          method: "post" , 
          mode:"cors",
          headers:{
            "Content-Type": "application/json"
          } ,
          body: JSON.stringify({isAdmin: loggedInUser.isAdmin})
          
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
  