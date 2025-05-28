"use client"

import { Box, Typography } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';

export default function SizeToggleButton({ sizes }: { sizes: string[] }) {
    const [view, setView] = useState('');

    const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
        setView(nextView);
    };

    return (
        <Box >
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <Typography variant="body2">سایز:</Typography>
                <Typography color={!view ? "textDisabled" : ""}> {view || "لطفا یک سایز را انتخاب کنید"}</Typography>
            </Box>
            <ToggleButtonGroup
                color="primary"
                orientation="horizontal"
                value={view}
                exclusive
                fullWidth
                onChange={handleChange}
                sx={{ direction: "ltr" }}
            >
                {sizes.map((size, index) => (
                    <ToggleButton key={index} value={size}>
                        {size}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </Box>
    );
}
