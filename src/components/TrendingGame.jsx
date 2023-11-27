import { Container, Row, Col, Card, Image } from "react-bootstrap";
import whatImg from "../asset/trending/1.jpg";
import happinessImg from "../asset/trending/8.jpg";
import vincenzoImg from "../asset/trending/3.jpg";
import olliwoorIdImage from "../asset/trending/9.jpg";
import wowImage from "../asset/trending/5.jpg";
import valorantImage from "../asset/trending/6.jpg"
const TrendingGame = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white text-center" id="trending">TRENDING GAMES</h1>
                <br/>
                <Row>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={whatImg} alt="1" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white"> 
                                    <Card.Title className="text-center">What's Wrong With Secretary Kim?</Card.Title>
                                    <Card.Text className="text-left">
                                    a
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 5 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={valorantImage} alt="6" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white"> 
                                    <Card.Title className="text-center">Hotel Del Luna</Card.Title>
                                    <Card.Text className="text-left">
                                    e
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 8 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={vincenzoImg} alt="3" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white"> 
                                    <Card.Title className="text-center">Vincenzo</Card.Title>
                                    <Card.Text className="text-left">
                                    c
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 10 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={wowImage} alt="5" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white"> 
                                    <Card.Title className="text-center">Happiness</Card.Title>
                                    <Card.Text className="text-left">
                                    b
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={olliwoorIdImage} alt="9" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white"> 
                                    <Card.Title className="text-center">Mouse</Card.Title>
                                    <Card.Text className="text-left">
                                    d
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 2 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={happinessImg} alt="8" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white"> 
                                    <Card.Title className="text-center">Start-Up</Card.Title>
                                    <Card.Text className="text-left">
                                    e
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 9 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TrendingGame;