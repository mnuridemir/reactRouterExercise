import {useEffect, useState} from 'react';
import { Routes, Route, Link, useParams } from "react-router-dom";
import axios from 'axios'

export default function Users() {
    const [users, setUsers] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        axios("https://jsonplaceholder.typicode.com/users").then((res)=> {
            setUsers(res.data)
        }).finally(()=> setLoading(false))
    },[]);
    
    return (
      <>
        <main>
          <h2>Users</h2>
          {loading && <div>Loading...</div> }
          
            <ul>
                {
                    users.map((user)=>(
                        <li key={user.id}>
                            <Link to={`/user/${user.id}`}> {user.name} </Link>
                        </li>
                    ))
                }
            </ul>
          
        </main>
        
      </>
    );
  }