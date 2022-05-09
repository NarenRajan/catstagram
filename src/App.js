import "./App.css";
import Feed from "./Feed/Feed";

import Profile from "./Profile";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
const axios = require("axios");

function App() {
  const [breeds, setBreeds] = useState([]);
  const FetchData = () => {
    axios
      .get("https://api.thecatapi.com/v1/breeds")
      .then((response) => {
        // handle success

        console.log("breeds", breeds);
        setBreeds(
          response.data.filter((data) => {
            return data.image?.url;
          })
        );
      })
      .catch((error) => {
        // handle error
        console.log(error);
        alert("error", error);
      });
  };

  return (
    <div>
      <Router>
        <Container>
          <Navbar expand="lg" variant="light" bg="dark">
            <Navbar.Brand>
              <Link to="/" style={{ color: "white" }}>
                Catstagram
              </Link>
            </Navbar.Brand>
          </Navbar>
          <Routes>
            <Route exact path="/" element={<Feed breeds={breeds} />} />
            <Route exact path="/profile/:id" element={<Profile />} />
          </Routes>
        </Container>
      </Router>
      {useEffect(FetchData, [])}
    </div>
  );
}

export default App;
