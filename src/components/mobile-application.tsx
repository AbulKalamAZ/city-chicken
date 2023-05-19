import theme from "@/styles/theme";
import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import CustomButton from "./common/custom-button";

const AvailableOnSection: React.FC = () => {
  return (
    <Grid container justifyContent={"center"} mb={16} alignItems={"center"}>
      <Grid item xs={12} sm={12} md={4} sx={{ alignSelf: "flex-start" }}>
        <Box>
          <Typography
            sx={{
              flexGrow: 1,
              color: "#3B3A4A",
              fontSize: "1.7rem",
              fontWeight: 400,
              mb: 3,
              fontFamily: "Contrail One !important",
            }}
          >
            Speisekarte
          </Typography>
          <Typography sx={{ color: "#838383", mb: 5 }}>
            Lade dir jetzt die foodysee App <br /> runter und finde <br />{" "}
            unsere Speisen in ihrem Handy
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <CustomButton
              sx={{
                maxWidth: "98px",
                width: "62px !important",
                fontFamily: "Inter !important",
                fontSize: "0.875rem",
                color: "#000",
                padding: "10px 20px",
                backgroundColor: "#D9D9D9 !important",
                boxShadow: "none",
                textTransform: "capitalize",
                borderRadius: "0px !important",
                fontWeight: 700,
                height: "31px !important",

                "&:hover": {
                  backgroundColor: "#fff !important",
                  boxShadow: "none",
                  border: "1px solid #C4C4C4",
                  color: theme.palette.text.primary,
                },
                mt: 4,
              }}
              size="small"
              text="Logo"
              variant="contained"
              type="submit"
            />
            <Divider
              orientation="vertical"
              color="#fff"
              sx={{
                color: "#fff !important",
                height: "40px",
                width: "2px !important",
                mx: 1,
                mt: 4,
              }}
            />
            <Typography
              mt={4}
              mr={5}
              sx={{
                color: "#000",
                fontFamily: "Inter !important",
                textAlign: "left",
                fontSize: "14px",
              }}
            >
              foodfood <br />{" "}
              <span
                style={{ fontSize: "10px", fontFamily: "Inter !important" }}
              >
                Business Partner
              </span>
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        sx={{
          // borderInline: { md: "1px solid #c5c5c5" },
          // borderBlock: {
          //   xs: "1px solid #c5c5c5",
          //   sm: "1px solid #c5c5c5",
          //   md: "none",
          // },
          borderTop: { xs: "1px solid #c5c5c5", md: "none" },
          borderLeft: { xs: "none", md: "1px solid #c5c5c5" },
          px: 5,
          py: { xs: 10, sm: 10 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="/iphone.svg" style={{ marginBottom: "30px" }} />
          <img src="/apple.svg" />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        sx={{
          borderInline: { md: "1px solid #c5c5c5" },
          borderBlock: {
            xs: "1px solid #c5c5c5",
            sm: "1px solid #c5c5c5",
            md: "none",
          },
          px: 5,
          py: { xs: 10, sm: 10 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="/iphone.svg" style={{ marginBottom: "30px" }} />
          <img src="/googleplay.svg" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default AvailableOnSection;
