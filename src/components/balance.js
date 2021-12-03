import { UserContext } from "./App";
import React from "react";
import Card from "react-bootstrap/Card";

function Balance() {
  const ctx = React.useContext(UserContext);

  return (
    <Card className="bg-light border-0">
      <Card.Body>
        <Card.Title>Balance</Card.Title>
        <Card.Text>Your current balance is of {ctx.users[0].balance}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default Balance;
