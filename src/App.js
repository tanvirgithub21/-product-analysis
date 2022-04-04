import { Route, Routes } from "react-router-dom";
import HomePage from "./Component/HomePage/HomePage";
import NavBar from "./Component/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
