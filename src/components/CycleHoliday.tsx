import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday = "🎄" | "👻" | "🐇" | "🐲" | "💕";

    const [holiday, setHoliday] = useState<Holiday>("🎄");

    const YEAR_TRANSITIONS: Record<Holiday, Holiday> = {
        "🐲": "💕",
        "💕": "🐇",
        "🐇": "👻",
        "👻": "🎄",
        "🎄": "🐲"
    };

    const ALPHA_TRANSITIONS: Record<Holiday, Holiday> = {
        "🐲": "🎄",
        "🎄": "🐇",
        "🐇": "👻",
        "👻": "💕",
        "💕": "🐲"
    };
    function changeAlpha(): void {
        const newHoliday = ALPHA_TRANSITIONS[holiday];
        setHoliday(newHoliday);
    }
    function changeYear(): void {
        const newHoliday = YEAR_TRANSITIONS[holiday];
        setHoliday(newHoliday);
    }
    return (
        <div>
            <span>
                <Button onClick={changeAlpha}>Advance by Alphabet</Button>
            </span>
            <span>
                <Button onClick={changeYear}>Advance by Year</Button>
            </span>
            <div>Holiday: {holiday}</div>
        </div>
    );
}
