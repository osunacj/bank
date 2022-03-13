function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={
        show ? (
          <CreateForm setShow={setShow} setStatus={setStatus} />
        ) : (
          <CreateMsg setShow={setShow} setStatus={setStatus} />
        )
      }
    />
  );
}

function CreateMsg(props) {
  return (
    <>
      <h5>Success</h5>
      <button
        type="submit"
        className="btn btn-light"
        onClick={() => {
          props.setShow(true), props.setStatus("");
        }}
      >
        Add another account
      </button>
    </>
  );
}

function CreateForm(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (password <= 8) {
      props.setStatus("Error: Password has to be at least 8 characters");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (!field) {
      props.setStatus("Error: " + label + " is required");
      setTimeout(() => props.setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function disabled() {
    if (name === "" && password === "" && email === "") return true;
  }

  async function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "Name")) return;
    if (!validate(email, "Email")) return;
    if (!validate(password, "Password")) return;

    await fetch(`/account/create/${name}/${email}/${password}`, {
      method: "GET",
    })
      .then((response) => {
        if (response.status === 200) {
          props.setShow(false);
          props.setStatus("Account created successfully!");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      Name
      <br />
      <input
        type="input"
        className="form-control"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <br />
      Email address
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
      <button
        type="submit"
        className="btn btn-light"
        disabled={disabled()}
        onClick={handleCreate}
      >
        Create Account
      </button>
    </>
  );
}
