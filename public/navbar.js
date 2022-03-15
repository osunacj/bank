function NavBar() {
  const [id, setId] = React.useState();

  return (
    <nav className=" navbar navbar-dark bg-dark">
      <div className="d-flex flex-row justify-content-around w-100">
        <a className="navbar-brand">BadBank</a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a
              className={` nav-link ${id === 7 ? "active" : ""} `}
              title="Home"
              href="#/home"
              onClick={() => setId(7)}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${id === 6 ? "active" : ""} `}
              title="Login"
              href="#/login"
              onClick={() => setId(6)}
            >
              Login
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${id === 0 ? "active" : ""} `}
              title="Create new Account"
              href="#/createAccount"
              onClick={() => setId(0)}
            >
              Create Account
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${id === 2 ? "active" : ""} `}
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
              title="Withraw"
              href="#/withdraw"
              onClick={() => setId(3)}
            >
              Withdraw
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${id === 4 ? "active" : ""} `}
              title="Show Balance"
              href="#/balance"
              onClick={() => setId(4)}
            >
              Balance
            </a>
          </li>
          {/* <li className="nav-item">
              <a
                className={`nav-link ${id === 5 ? "active" : ""} `}
                title="User Data Page"
                href="#/alldata"
                onClick={() => setId(5)}
              >
                AllData
              </a>
            </li> */}
        </ul>
        <div className="d-flex flex-row">
          <Logout setId={setId} />
          <a className="nav-link p-3 " id="emailLocation"></a>
        </div>
      </div>
    </nav>
  );
}
