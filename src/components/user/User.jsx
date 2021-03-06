import {useEffect,useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function User() {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    
    const {id} = useParams();

    useEffect(()=>{
        axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res)=> {
            setUser(res.data)
        }).finally(()=> setLoading(false))
    }, [id])

  return <div>
      <h1>User detail</h1>
      <h3>User ID : {user.id}</h3>
      {loading && <div>Loading...</div> }
      {!loading && 
      <code>
          {JSON.stringify(user)}
      </code>}
      
      <br />

      <Link to={`/user/${parseInt(id)+1}`}>Next User ({parseInt(id)+1})</Link>
  </div>;
}
