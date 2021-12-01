import { useState } from "react";

function NavBar() {
  const [id, setId] = useState();
  return (
    <>
      <nav className=" px-3 navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          BadBank
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={`nav-link ${id === 0 ? "active" : ""} `}
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Create new Account"
                href="#/CreateAccount/"
                onClick={() => setId(0)}
              >
                Create Account
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${id === 2 ? "active" : ""} `}
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Deposit Page"
                href="#/deposit/"
                onClick={() => setId(2)}
              >
                Deposit
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${id === 3 ? "active" : ""} `}
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Withraw"
                href="#/withdraw/"
                onClick={() => setId(3)}
              >
                Withdraw
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${id === 4 ? "active" : ""} `}
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Show Balance"
                href="#/balance/"
                onClick={() => setId(4)}
              >
                Balance
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${id === 5 ? "active" : ""} `}
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="User Data Page"
                href="#/alldata/"
                onClick={() => setId(5)}
              >
                AllData
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
