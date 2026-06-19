import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Footer from "./components/Footer";
import { UserContext } from "./context/UserContext";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const searchRef = useRef(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <UserContext.Provider value={{ users }}>
      <Navbar />

      <div className="search-wrapper">
        <input
          ref={searchRef}
          type="text"
          placeholder="🔍 Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="container">
        {filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
          />
        ))}
      </div>

      <Footer />
    </UserContext.Provider>
  );
}

export default App;