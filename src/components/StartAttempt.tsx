import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function decreaseAttempts(): void {
        attempts === 0 ? setAttempts(0) : setAttempts(attempts - 1);
    }
    return (
        <div>
            <div>
                <div>Attempts: {attempts}</div>
                <Button
                    onClick={() => {
                        decreaseAttempts();
                        setProgress(true);
                    }}
                    disabled={progress || attempts === 0}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button onClick={() => setProgress(false)} disabled={!progress}>
                    Stop Quiz
                </Button>
            </div>

            <div>
                <Button
                    onClick={() => setAttempts(1 + attempts)}
                    disabled={progress}
                >
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
