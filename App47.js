import React from 'react';
import { Button, Container, Row, Col, Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';

function App() {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <Card>
            <CardHeader>Reactstrap Example</CardHeader>
            <CardBody>
              <CardTitle tag="h5">Welcome to Reactstrap</CardTitle>
              <CardText>
                This is a simple example of using Reactstrap components in a React application.
              </CardText>
              <Button color="primary">Click Me!</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
