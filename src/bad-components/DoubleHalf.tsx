import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DoublerHalverProps {
    // The type is "a function that consumes nothing and returns nothing"
    doubleHalve: () => void;
}
function Doubler({ doubleHalve }: DoublerHalverProps): JSX.Element {
    return <Button onClick={doubleHalve}>Double</Button>;
}
function Halver({ doubleHalve }: DoublerHalverProps): JSX.Element {
    return <Button onClick={doubleHalve}>Halve</Button>;
}
export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    const doubler = () => setDhValue(2 * dhValue);
    const halver = () => setDhValue(0.5 * dhValue);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler doubleHalve={doubler}></Doubler>
            <Halver doubleHalve={halver}></Halver>
        </div>
    );
}
