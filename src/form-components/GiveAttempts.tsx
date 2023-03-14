import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("0");
    const attempts = parseInt(attemptsRequested) || 0;
    return (
        <>
            <div>
                <Form.Group controlId="formGiveAttemmpts">
                    <Form.Label>How Many Attempts Do You Need?: </Form.Label>
                    <Form.Control
                        type="number"
                        value={attemptsRequested}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setAttemptsRequested(event.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button
                    onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                    disabled={attemptsLeft === 0}
                >
                    Use
                </Button>
                <Button
                    onClick={() => setAttemptsLeft(attemptsLeft + attempts)}
                >
                    Gain
                </Button>
            </div>
            <div>Attempts Left: {attemptsLeft}</div>
        </>
    );
}
