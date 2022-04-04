import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Component/HomePage/HomePage";
import NavBar from "./Component/NavBar/NavBar";
import NotFound from "./Component/NotFound/NotFound";
import Reviews from "./Component/Reviews/Reviews";

export const usersContext = createContext();

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/tanvirgithub21/ass-9-data/gh-pages/MOCK_DATA.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <usersContext.Provider value={{ users: users }}>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </usersContext.Provider>
  );
}

export default App;
