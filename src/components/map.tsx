import { address } from "@/data/address";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
const BerlinMap = () => {
  const apiKey = "2e91ac8112445fe7";

  const array = ["City Chicken", "Email  City Chicken", "101781   Berlin"];
  return (
    <Box pt={16} pb={22}>
      <div style={{ height: "520px", width: "100%" }}>
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
        <Container sx={{ fontFamily: "Inter", fontSize: "14px" }}>
          <Box sx={{ padding: { xs: "0 20px", sm: "0 25px", md: "0" } }}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={4}>
                <Box
                  sx={{
                    maxWidth: "280px",
                    margin: { xs: "0 auto", md: "0 auto 0 0" },
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{
                      paddingBottom: { xs: "16px", md: "24px" },
                      marginBottom: { xs: "18px", md: "24px" },
                      borderBottom: "1px solid #dbdbdb",
                    }}
                  >
                    <Typography sx={{ fontSize: "14px" }}>
                      {address.name}
                    </Typography>
                  </Stack>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{
                      paddingBottom: { xs: "16px", md: "24px" },
                      marginBottom: { xs: "18px", md: "24px" },
                      borderBottom: "1px solid #dbdbdb",
                    }}
                  >
                    <Typography sx={{ fontSize: "14px" }}>Email</Typography>
                    <Typography sx={{ fontSize: "14px" }}>
                      {address.email}
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <Box
                  sx={{
                    maxWidth: "280px",
                    margin: { xs: "0 auto", md: "0 auto 0 0" },
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{
                      paddingBottom: { xs: "16px", md: "24px" },
                      marginBottom: { xs: "18px", md: "24px" },
                      borderBottom: "1px solid #dbdbdb",
                    }}
                  >
                    <Typography sx={{ fontSize: "14px" }}>
                      {address.sonnenallee}
                    </Typography>
                    <Typography sx={{ fontSize: "14px" }}>
                      {address.value}
                    </Typography>
                  </Stack>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{
                      paddingBottom: { xs: "16px", md: "24px" },
                      marginBottom: { xs: "18px", md: "24px" },
                      borderBottom: "1px solid #dbdbdb",
                    }}
                  >
                    <Typography sx={{ fontSize: "14px" }}>
                      {address.pin}
                    </Typography>
                    <Typography sx={{ fontSize: "14px" }}>
                      {address.city}
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={4}></Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </Box>
  );
};

export default BerlinMap;
