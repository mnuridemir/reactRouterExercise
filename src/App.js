import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About';
import Users from './components/users/Users';
import User from './components/user/User';


function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <nav>
          <Link to="/">Home</Link>
        <br />
        <Link to="/About">About</Link>
        <br />
        <Link to="/Users">Users</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />} />
        <Route path="user/:id" element={<User />} />
        
      </Routes>
      
    </div>
  );
}




export default App;
