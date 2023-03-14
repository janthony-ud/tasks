import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const COLORS = [
        "red",
        "green",
        "blue",
        "yellow",
        "pink",
        "orange",
        "purple",
        "magenta"
    ];
    const default_color = COLORS[0];
    const [color, setColor] = useState<string>(default_color);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    //couldn't figure out the inline with the map function
    //i think each iteration would make a new inline, so i just left it vertical
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group controlId="formChangeColor"></Form.Group>
            {COLORS.map((c: string) => (
                <>
                    <li key={c}> </li>
                    <Form.Check
                        type="radio"
                        id={"color-check" + { c }}
                        name={c}
                        value={c}
                        onChange={updateColor}
                        checked={color === c}
                        inline
                    ></Form.Check>
                    <span style={{ backgroundColor: c }}>{c}</span>
                </>
            ))}
            <div>
                You have chosen:
                {
                    <span
                        data-testid="colored-box"
                        style={{ backgroundColor: color }}
                    >
                        {color}
                    </span>
                }
            </div>
        </div>
    );
}
