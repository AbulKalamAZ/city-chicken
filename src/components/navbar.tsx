import theme from "@/styles/theme";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import * as React from "react";
import CustomButton from "./common/custom-button";
import MobileNavigation from "./mobile-navigation";

interface Props {
  signIn?: any;
}

const pages = [
  "Restaurant",
  "Spicekate",
  "Services",
  "Offnugzstien",
  "Standort",
];

const ResponsiveAppBar: React.FC<Props> = ({ signIn }) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  console.log("navbar");
  return (
    <Box
      sx={{
        marginBottom: "1px solid red",
      }}
    >
      <AppBar
        sx={{
          backgroundColor: "#fff",
          boxShadow: "none",
          borderBottom: "1px solid #C4C4C4",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <>
          <Image src="/logo.png" width={280} height={50} alt="citychicken" />
          <Toolbar
            disableGutters
            sx={{
              justifyContent: "space-between",
              backgroundColor: "red",
              mx: "0 !important",
              flexGrow: 1,
            }}
          >
            <MobileNavigation signIn />
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
              }}
            >
              <Typography textAlign={"left"} sx={{ p: 3, flexGrow: 1 }}>
                City Chicken <br /> since 1960s
              </Typography>
              {pages.map((page) => (
                <Typography
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    fontFamily: "League Spartan !important",
                    fontWeight: 500,
                    padding: "11px 0px",
                    color: "#fff",
                    display: "block",
                    cursor: "pointer",
                    mx: 5,
                    mt: 5,
                  }}
                >
                  {page}
                </Typography>
              ))}
              <Box>
                <CustomButton
                  sx={{
                    maxWidth: "98px",
                    width: "100%",
                    fontFamily: "League Spartan !important",
                    fontSize: "0.875rem",
                    borderRadius: "8px !important",
                    color: "#FFFFFF",
                    padding: "10px 20px",
                    backgroundColor: "grey",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#fff !important",
                      boxShadow: "none",
                      border: "1px solid #C4C4C4",
                      color: theme.palette.text.primary,
                    },
                    mt: 5,
                  }}
                  size="small"
                  text="Logo"
                  variant="contained"
                  type="submit"
                />
              </Box>
              <Divider
                orientation="vertical"
                color="#fff"
                sx={{
                  color: "#fff !important",
                  height: "40px",
                  width: "2px !important",
                  mx: 1,
                  mt: 5,
                }}
              />
              <Typography mt={5}>
                Food Food <br /> Business Partner
              </Typography>
            </Box>
          </Toolbar>
        </>
      </AppBar>
    </Box>
  );
};
export default ResponsiveAppBar;
