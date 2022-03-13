function Logout(props) {
  const ctx = React.useContext(UserContext);
  return (
    <div className="nav-item">
      <button
        className="btn btn-primary"
        title="Logout"
        onClick={() => ctx.users.pop()}
      >
        Logout
      </button>
    </div>
  );
}

function NavBar() {
  const [id, setId] = React.useState();
  const [show, setShow] = React.useState(false);
  const ctx = React.useContext(UserContext);

  function currentUser() {
    if (ctx.users.length > 0) {
      return ctx.users[0].email;
      setShow(true);
    }
  }
  return (
    <>
      <nav className=" px-3 navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand">BadBank</a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={`nav-link ${id === 7 ? "active" : ""} `}
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
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
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
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
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
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
                href="#/withdraw"
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
                href="#/balance"
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
                href="#/alldata"
                onClick={() => setId(5)}
              >
                AllData
              </a>
            </li>
          </ul>
        </div>
        <Logout />
        <h5 className="text-light">{currentUser()}</h5>
      </nav>
    </>
  );
}
