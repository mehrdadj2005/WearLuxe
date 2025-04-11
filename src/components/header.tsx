import { Button, Typography } from "@mui/material";
import Searchbox from "./ui/searchbox";
import { ForkLeft, KeyboardArrowLeft, Person2Outlined } from "@mui/icons-material";

function Header() {
    return (
        <header className="flex justify-between items-center">
            <div>
                <Typography variant="h2">Logo</Typography>
            </div>
            <div className="w-4/12">
                <Searchbox />
            </div>
            <Button
                variant="outlined"
                startIcon={<Person2Outlined />}
                endIcon={<KeyboardArrowLeft />}
                size="medium"
                className="flex gap-2"
            >وارد شوید</Button>
        </header>
    );
}

export default Header;