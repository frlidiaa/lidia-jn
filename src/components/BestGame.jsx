import { Container, Row, Col, Card, Image } from "react-bootstrap";
import Back2Image from "../asset/best/back4blood.jpg";
import CryImage from "../asset/best/crysis3.jpg";
import ResidenImage from "../asset/best/residentEvil2.jpg";
import TheWalkingGame from "../asset/best/theWalkingDead.jpg";
import ThiefGame from "../asset/best/thief.jpg";
import UntilGame from "../asset/best/untilDawn.jpg";
const BestGame = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white text-center" id="best">BEST GAMES</h1>
                <br/>
                <Row>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={Back2Image} alt="Back4 Blood" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white"> 
                                    <Card.Title className="text-center">BACK4BLOOD</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wirder card with natural lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 15 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={CryImage} alt="Cry Game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white"> 
                                    <Card.Title className="text-center">CRYSIS3</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wirder card with natural lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 13 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={ResidenImage} alt="Residen Game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white"> 
                                    <Card.Title className="text-center">RESIDEN EVIL 2</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wirder card with natural lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 6 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={TheWalkingGame} alt="The Walking Game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white"> 
                                    <Card.Title className="text-center">THE WALKING DEAD</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wirder card with natural lead-in to additional content
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
                            <Image src={ThiefGame} alt="Thief Game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white"> 
                                    <Card.Title className="text-center">THIEF</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wirder card with natural lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 7 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={UntilGame} alt="Until Game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white"> 
                                    <Card.Title className="text-center">UNTIL DAWN</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wirder card with natural lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 19 mins ago
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

export default BestGame;