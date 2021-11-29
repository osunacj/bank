import Card from "react-bootstrap/Card";
function Home() {
  return (
    <Card>
      <Card.Img variant="top" src="./bank.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Home;
