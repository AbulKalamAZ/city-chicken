import { payment } from "@/data/payments";
import { Box, Grid, Stack, Typography } from "@mui/material";

const Payments = () => {
  return (
    <Box sx={{ mb: 8 }}>
      <Box>
        <Typography sx={{ color: "#838383" }}>
          Sie können bei ins vor Ort mit <br /> folgenden Zahlungsmittel zahlen:
        </Typography>
      </Box>
      <Grid py={8} container>
        {payment.map((data) => (
          <Grid
            pt={2}
            key={data.name}
            direction={"row"}
            item
            xs={12}
            sm={12}
            md={6}
            lg={3}
          >
            <Stack
              direction="row"
              alignItems={"center"}
              sx={{
                borderBottom: "1px solid #f1f1f1",
                mr: 3,
                paddingBottom: "16px",
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
              gap={2}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: "center",
                  alignItems: "center",
                  gap: { xs: "4px", md: "16px" },
                }}
              >
                <img src={data.icon} />
                <Typography
                  fontWeight={400}
                  sx={{ fontSize: "12px", fontFamily: "Inter" }}
                >
                  {data.name}
                </Typography>
              </Box>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Payments;
