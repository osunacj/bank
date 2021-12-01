import Card from "react-bootstrap/Card";
import React from "react";

function Home() {
  return (
    <Card className="bg-light border-0">
      <Card.Body>
        <Card.Title>Home Page</Card.Title>
        <Card.Text>Welcome back.</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Home;
