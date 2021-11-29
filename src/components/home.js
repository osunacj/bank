import Card from "react-bootstrap/Card";
function Home() {
  return (
    <>
      <div className="rounded bg-light p-2">
        <h2 className="text-center ">Welcome to your Bank</h2>
      </div>
      <br />
      <Card className="bg-light border-0">
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>This is the Home page for your Bank.</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Home;
