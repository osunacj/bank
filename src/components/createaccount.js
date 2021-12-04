import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { UserContext } from "./App";

function CreateAccount() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (password <= 8) {
      setStatus("Error: Password has to be at least 8 characters");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }

    return true;
  }

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "Name")) return;
    if (!validate(email, "Email")) return;
    if (!validate(password, "Password")) return;
    ctx.users.push({ name, email, password, balance: 100 });
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  function disabled() {
    if (name === "" && password === "" && email === "") return true;
  }

  return (
    <Card className="bg-light border-0">
      <Card.Body>
        <Card.Title>Create Account</Card.Title>
        <Card.Text>Please enter all fields.</Card.Text>

        <h5 className="text-danger">{status}</h5>
        <br />
        {show ? (
          <>
            Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
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
              id="email"
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
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={disabled()}
              onClick={handleCreate}
            >
              Create Account
            </button>
          </>
        ) : (
          <>
            <h5 className="text-success text-center">Success</h5>
            <button
              type="submit"
              className="btn btn-secondary"
              onClick={clearForm}
            >
              Add another account
            </button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default CreateAccount;
