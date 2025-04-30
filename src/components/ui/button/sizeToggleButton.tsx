"use client"

import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import { Box, Typography } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';

export default function SizeToggleButton() {
    const [view, setView] = useState('');

    const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
        setView(nextView);
    };

    return (
        <Box >
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <Typography>سایز:</Typography>
                <Typography color={!view ? "textDisabled" : ""}> {view || "لطفا یک سایز را انتخاب کنید"}</Typography>
            </Box>
            <ToggleButtonGroup
                color="primary"
                orientation="horizontal"
                value={view}
                exclusive
                aria-label="Platform"
                onChange={handleChange}
            >
                <ToggleButton value="small" aria-label="list">
                    S
                </ToggleButton>
                <ToggleButton value="medium" aria-label="module">
                    M
                </ToggleButton>
                <ToggleButton value="large" aria-label="quilt">
                    L
                </ToggleButton>
                <ToggleButton value="extra large" aria-label="quilt">
                    XL
                </ToggleButton>
            </ToggleButtonGroup>
        </Box>
    );
}
