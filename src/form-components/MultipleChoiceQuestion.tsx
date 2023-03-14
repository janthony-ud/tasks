import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedAnswer, setSelectedAnswer] = useState<string>(options[0]);
    function updateSelected(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="formMultipleChoice">
                <h3>Multiple Choice Question</h3>
                <Form.Select value={selectedAnswer} onChange={updateSelected}>
                    {options.map((answer: string) => (
                        <option key={answer} value={answer}>
                            {answer}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {selectedAnswer === expectedAnswer ? <div>✔️</div> : <div>❌</div>}
        </div>
    );
}
