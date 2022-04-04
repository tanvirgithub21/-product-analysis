import { Route, Routes } from "react-router-dom";
import Card from "./Component/Card/Card";
import HomePage from "./Component/HomePage/HomePage";
import NavBar from "./Component/NavBar/NavBar";
import NotFound from "./Component/NotFound/NotFound";
import Reviews from "./Component/Reviews/Reviews";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/reviews" element={<Reviews/>} />
        {/* <Route path="/reviews" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
