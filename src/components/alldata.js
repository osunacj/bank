import React from "react";
import Card from "react-bootstrap/Card";

import { UserContext } from "./App";

function AllData() {
  const ctx = React.useContext(UserContext);

  return (
    <Card className="bg-light border-0">
      <Card.Body>
        <Card.Title>Stored Data</Card.Title>
        <Card.Text>All data stored is shown here</Card.Text>
        <br />
        <div>
          <h5>{`Name: ${ctx.users[0].name}`}</h5>
          <h5>{`Email: ${ctx.users[0].email}`}</h5>
          <h5>{`Balance: ${ctx.users[0].balance}`}</h5>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AllData;
