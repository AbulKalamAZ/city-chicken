import { address } from "@/data/address";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
const BerlinMap = () => {
  const apiKey = "2e91ac8112445fe7";

  const array = ["City Chicken", "Email  City Chicken", "101781   Berlin"];
  return (
    <Box py={16}>
      <div style={{ height: "400px", width: "100%" }}>
        <Container maxWidth="lg">
          <div>
            <Typography
              sx={{
                flexGrow: 1,
                color: "#3B3A4A ",
                fontSize: "32px",
                fontWeight: 400,
                fontFamily: "Contrail One !important",
                mb: 4,
              }}
            >
              Standort
            </Typography>
          </div>
        </Container>
        <iframe
          width="100%"
          style={{ marginBottom: "50px" }}
          height="450"
          aria-hidden="false"
          src={`${address.map}`}
        ></iframe>
        <Container sx={{ fontFamily: "Inter" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ borderBottom: "1px solid #f1f1f1" }}
              >
                <Typography>{address.name}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ borderBottom: "1px solid #f1f1f1" }}
              >
                <Typography>{address.sonnenallee}</Typography>
                <Typography>{address.value}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ borderBottom: "1px solid #f1f1f1" }}
              >
                <Typography>Email</Typography>
                <Typography>{address.email}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ borderBottom: "1px solid #f1f1f1" }}
              >
                <Typography>{address.pin}</Typography>
                <Typography>{address.city}</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Box>
  );
};

export default BerlinMap;
