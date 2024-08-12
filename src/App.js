import "./App.css";
import { Route, Routes } from "react-router-dom";
import Users from "./Components/Feature/Users";
import Home from "./Components/Same/Home";
import Profile from "./Components/Feature/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/profile/:username" element={<Profile />}></Route>
      </Routes>
    </>
  );
}

export default App;
