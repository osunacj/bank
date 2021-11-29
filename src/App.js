import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/home";
import NavBar from "./components/navbar";
import Balance from "./components/balance";
import Deposit from "./components/deposit";
// import CreateAccount from "./components/createaccount";
import Login from "./components/login";
import Withdraw from "./components/withdraw";
// import AllData from "./components/alldata";

function App() {
  return (
    <Router>
      <NavBar />
      {/* <UserContext.Provider */}
      {/* value={{
          users: [
            {
              name: "abel",
              email: "abel@mit.edu",
              password: "secret",
              balance: 100,
            },
          ],
        }}
      > */}
      <div className="container" style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/CreateAccount/" component={<CreateAccount/>} /> */}
          <Route path="/login/" element={<Login />} />
          <Route path="/deposit/" element={<Deposit />} />
          <Route path="/withdraw/" element={<Withdraw />} />
          <Route path="/balance/" element={<Balance />} />
          {/* <Route path="/alldata/" component={<AllData/>} /> */}
        </Routes>
      </div>
      {/* </UserContext.Provider> */}
    </Router>
  );
}

export default App;
