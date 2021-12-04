import Card from "react-bootstrap/Card";
import React from "react";

function Home() {
  return (
    <Card className="bg-light border-0">
      <Card.Body>
        <Card.Title>Home Page</Card.Title>
        <Card.Text>Welcome back.</Card.Text>
      </Card.Body>{" "}
      <img
        src="https://902558.smushcdn.com/2161880/wp-content/uploads/2017/05/Fotolia_116981296_Subscription_Monthly_M.jpg?lossy=1&strip=1&webp=1"
        alt=""
        style={{ height: 600 }}
      />
    </Card>
  );
}

export default Home;
