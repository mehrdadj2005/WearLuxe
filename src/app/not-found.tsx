import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

function NotFound() {
    return (
        <Box className="text-center py-10">
            <Typography variant="h1" className="text-primary-950 text-9xl">404</Typography>
            <Typography>به نظر میرسه شما در فضا گم شدید و صفحه مورد نظرتون پیدا نشد!</Typography>
            <Link href="/">
                <Button variant="outlined">صفحه اصلی</Button>
            </Link>
        </Box>
    );
}

export default NotFound;