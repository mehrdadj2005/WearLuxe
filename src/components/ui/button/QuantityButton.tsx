"use client"

import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

function QuantityButton() {
    const [value, setValue] = useState(1);

    const handleDecrease = () => {
        if (value > 1) {
            setValue(value - 1);
        }
    };

    const handleIncrease = () => {
        setValue(value + 1);
    };
    return (
        <Box>
            <Typography variant="body2">تعداد:</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                <Button onClick={handleDecrease} variant="contained">-</Button>
                <Typography>{value}</Typography>
                <Button onClick={handleIncrease} variant="contained">+</Button>
            </Box>
        </Box>
    );
}

export default QuantityButton;