import Card from "react-bootstrap/Card";
import React from "react";
import { UserContext } from "./App";

function Deposit() {
  const ctx = React.useContext(UserContext);
  const [status, setStatus] = React.useState("");
  const [ammount, setAmmount] = React.useState(0);

  function update() {
    ctx.users[0].balance = ctx.users[0].balance + ammount;
    console.log(ctx.users[0].balance);
    setAmmount(0);
    let inputDeposit = document.getElementById("inputDeposit");
    inputDeposit.value = "";
  }

  function numberAlert(value) {
    if (isNaN(Number(value))) {
      setStatus("Not a Number");
    }
  }

  function negativeNumber(value) {
    if (Number(value) < 0) {
      setStatus("Negative number not allowed");
    } else {
      setStatus("");
      setAmmount(Number(value));
    }
  }

  function disabled() {
    if (ammount === 0) return true;
  }

  return (
    <Card className="bg-light border-0">
      <Card.Body>
        <Card.Title>Deposit</Card.Title>
        <Card.Text>Please enter the ammount to deposit.</Card.Text>
        <br />
        <div className="d-flex justify-content-between px-1">
          <h5 className="text-danger">{status}</h5>
          <h5>Current Balance: {ctx.users[0].balance}</h5>
        </div>

        <input
          type="number"
          id="inputDeposit"
          className="form-control"
          placeholder="Deposit Ammount"
          onChange={(e) => {
            numberAlert(e.currentTarget.value);
            negativeNumber(e.currentTarget.value);
          }}
        ></input>
        <br />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={disabled()}
          onClick={(e) => update()}
        >
          Deposit
        </button>
      </Card.Body>
    </Card>
  );
}

export default Deposit;
