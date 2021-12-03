import Card from "react-bootstrap/Card";
import React from "react";
import { UserContext } from "./App";

function Withdraw() {
  const ctx = React.useContext(UserContext);
  const [status, setStatus] = React.useState("");
  const [ammount, setAmmount] = React.useState(0);
  const [disabled, setDisabled] = React.useState(true);
  const inputDeposit = document.getElementById("inputWithdraw");

  function update() {
    if (ctx.users[0].balance < ammount) {
      setDisabled(true);
      setStatus("Withdraw ammount is bigger than balance.");
      inputDeposit.value = "";
    } else {
      ctx.users[0].balance = ctx.users[0].balance - ammount;
      console.log(ctx.users[0].balance);
      setAmmount(0);

      inputDeposit.value = "";
      setDisabled(true);
    }
  }

  function numberAlert(value) {
    if (isNaN(Number(value))) {
      setStatus("Not a Number");
    }
  }

  function negativeNumber(value) {
    if (Number(value) < 0) {
      setDisabled(true);
      setStatus("Negative number not allowed");
    } else {
      setDisabled(false);
      setStatus("");
      setAmmount(Number(value));
    }
  }

  return (
    <Card className="bg-light border-0">
      <Card.Body>
        <Card.Title>Withdraw</Card.Title>
        <Card.Text>Please enter the ammount to withdraw.</Card.Text>
        <br />
        <div className="d-flex justify-content-between px-1">
          <h5 className="text-danger">{status}</h5>
          <h5>Current Balance: {ctx.users[0].balance}</h5>
        </div>

        <input
          type="number"
          id="inputWithdraw"
          className="form-control"
          placeholder="Withdraw Ammount"
          onChange={(e) => {
            numberAlert(e.currentTarget.value);
            negativeNumber(e.currentTarget.value);
          }}
        ></input>
        <br />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={disabled}
          onClick={(e) => update()}
        >
          Withdraw
        </button>
      </Card.Body>
    </Card>
  );
}

export default Withdraw;
