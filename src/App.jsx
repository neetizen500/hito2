import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar setPage={setPage} />
      {page === "home" && <Home />}
      {page === "login" && <Login />}
      {page === "register" && <Register />}
      <Footer />
    </>
  );
}

export default App;
