import { Button, Card, Col, Container, Row } from "react-bootstrap"

const Content = () => {
    return (
        <div className="my-4">
            <Container>
                <Row className="gy-4">
                    <Col md={4}>
                        <Card >
                            <Card.Img variant="top" src="https://www.dummies.com/wp-content/uploads/blogging-ideas.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sint assumenda praesentium recusandae in provident.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card >
                            <Card.Img variant="top" src="https://www.dummies.com/wp-content/uploads/blogging-ideas.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsa fuga accusantium mollitia voluptates rem beatae earum error iste reprehenderit?
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card >
                            <Card.Img variant="top" src="https://www.dummies.com/wp-content/uploads/blogging-ideas.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card >
                            <Card.Img variant="top" src="https://www.dummies.com/wp-content/uploads/blogging-ideas.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card >
                            <Card.Img variant="top" src="https://www.dummies.com/wp-content/uploads/blogging-ideas.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Content