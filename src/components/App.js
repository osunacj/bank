import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./home";
import NavBar from "./navbar";
import Balance from "./balance";
import Deposit from "./deposit";
import CreateAccount from "./createaccount";
import Withdraw from "./withdraw";

// import AllData from "./components/alldata";

export const UserContext = React.createContext(null);

function App() {
  return (
    <Router>
      <NavBar />
      <UserContext.Provider
        value={{
          users: [
            {
              name: "Abel",
              email: "abel@mit.edu",
              password: "secret",
              balance: 100,
            },
          ],
        }}
      >
        <div className="container" style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/CreateAccount/" element={<CreateAccount />} />s
            <Route path="/deposit/" element={<Deposit />} />
            <Route path="/withdraw/" element={<Withdraw />} />
            <Route path="/balance/" element={<Balance />} />
            {/* <Route path="/alldata/" element={<AllData/>} /> */}
          </Routes>
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
