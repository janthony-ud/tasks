import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface ChangeColorProps {
    nextcolor: () => void;
}
interface ColorPreviewProps {
    a_color_index: number;
}
//() => setColorIndex((1 + colorIndex) % COLORS.length)

function ChangeColor({ nextcolor }: ChangeColorProps): JSX.Element {
    return <Button onClick={nextcolor}>Next Color</Button>;
}

function ColorPreview({ a_color_index }: ColorPreviewProps): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[a_color_index],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    const nextColor = () => setColorIndex((1 + colorIndex) % COLORS.length);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor nextcolor={nextColor}></ChangeColor>
                <ColorPreview a_color_index={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
