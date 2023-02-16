import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import painting from "./eiffeltower.jpeg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            Justin Anthony
            <div>Hello World!</div>
            <div style={{ backgroundColor: "green" }}>
                <h1> This is header text that says a very important thing</h1>
            </div>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World{" "}
                </Button>
            </div>
            Top 3 Movies:
            <ol>
                <li>Dazed and Confused</li>
                <li>Before Sunset</li>
                <li>Twin Peaks: Fire Walk with Me</li>
            </ol>
            <Container>
                <Row>
                    <Col>
                        Big Ol Rectangle
                        <div
                            style={{
                                width: "100px",
                                height: "200px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        An Even Bigger Rectangle
                        <div
                            style={{
                                width: "200px",
                                height: "400px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <img src={painting} alt="Painting of a French Balcony"></img>
        </div>
    );
}

export default App;
