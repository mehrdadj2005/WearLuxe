import { KeyboardArrowLeft, Person2Outlined } from "@mui/icons-material";
import { Button, Container, Typography } from "@mui/material";
import Nav from "./ui/nav";
import Searchbox from "./ui/searchbox";

function Header() {
  return (
    <>
      <header>
        <Container className="flex justify-between items-center">
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
          >
            وارد شوید
          </Button>
        </Container>
      </header>
      <div className="bg-primary-50">
        <Nav />
      </div>
    </>
  );
}

export default Header;
