import Container from "@/components/container";
import { CircularProgress, Typography } from "@mui/material";

function Loading() {
  return (
    <Container className="flex justify-center items-center">
      <CircularProgress />
      <Typography>Loading...</Typography>
    </Container>
  );
}

export default Loading;
