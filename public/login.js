function Logout(props) {
  function logout() {
    fetch("/logout")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        props.setId(7);
        document.getElementById("emailLocation").innerHTML = " ";
      });
  }
  return (
    <a
      className="nav-link"
      href="#/home"
      title="Logout"
      onClick={() => logout()}
    >
      Logout
    </a>
  );
}

function Login() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");

  React.useEffect(() => {
    fetch("/user")
      .then((response) => response.json())
      .then((data) => {
        if (data[0]) {
          console.log(data);
          document.getElementById("emailLocation").innerHTML = data[0].email;
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Card
      bgcolor="secondary"
      header="Login"
      status={status}
      body={
        show ? (
          <LoginForm setShow={setShow} setStatus={setStatus} />
        ) : (
          <LoginMsg setShow={setShow} setStatus={setStatus} />
        )
      }
    />
  );
}

function LoginMsg(props) {
  return (
    <>
      <h5>Login Successfull</h5>
      <button
        type="submit"
        className="btn btn-light"
        onClick={() => props.setShow(true)}
      >
        Authenticate again
      </button>
    </>
  );
}

function LoginForm(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function handle() {
    await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // If incorrect credentials
        console.log(data);
        if (data.code === 403) {
          props.setStatus(data.message);
        } else {
          document.getElementById("emailLocation").innerHTML = email;
          props.setStatus("");
          props.setShow(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      Email
      <br />
      <input
        type="input"
        className="form-control"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <br />
      Password
      <br />
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <br />
      <button type="submit" className="btn btn-light" onClick={handle}>
        Login
      </button>
    </>
  );
}
