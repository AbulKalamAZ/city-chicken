import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Divider,
  ListItemText,
  Drawer,
  IconButton,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import CustomButton from "@/components/common/custom-button";
import theme from "@/styles/theme";
import About from "@/components/about";
import SliderComponent from "@/components/home-slider";
import Head from "next/head";
import MobileApplication from "@/components/mobile-application";
import Service from "@/components/service";
import Payments from "@/components/payments";
import Timings from "@/components/timings";
import BerlinMap from "@/components/map";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import AvailableOnSection from "@/components/mobile-application";
interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  "restaurant",
  "speisekarte",
  "services",
  "offnungszeiten",
  "standort",
];

const LandingPage: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeSection, setActiveSection] = useState<string>("restaurant");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const restaurant: any = document.getElementById("restaurant");
      const speisekarte: any = document.getElementById("speisekarte");
      const services: any = document.getElementById("services");
      const offnungszeiten: any = document.getElementById("offnungszeiten");
      const standort: any = document.getElementById("standort");

      if (
        offnungszeiten?.offsetTop <=
          window.pageYOffset + window.innerHeight / 2 &&
        offnungszeiten?.offsetTop + offnungszeiten?.offsetHeight >
          window.pageYOffset + window.innerHeight / 2
      ) {
        setActiveSection("offnungszeiten");
      } else if (
        services?.offsetTop <= window.pageYOffset + window.innerHeight / 2 &&
        services?.offsetTop + services?.offsetHeight >
          window.pageYOffset + window.innerHeight / 2
      ) {
        setActiveSection("services");
      } else if (
        speisekarte?.offsetTop <= window.pageYOffset + window.innerHeight / 2 &&
        speisekarte?.offsetTop + speisekarte?.offsetHeight >
          window.pageYOffset + window.innerHeight / 2
      ) {
        setActiveSection("speisekarte");
      } else if (
        standort?.offsetTop <= window.pageYOffset + window.innerHeight / 2 &&
        standort?.offsetTop + standort?.offsetHeight >
          window.pageYOffset + window.innerHeight / 2
      ) {
        setActiveSection("standort");
      } else if (
        restaurant?.offsetTop <= window.pageYOffset + window.innerHeight / 2 &&
        restaurant?.offsetTop + restaurant?.offsetHeight >
          window.pageYOffset + window.innerHeight / 2
      ) {
        setActiveSection("restaurant");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSectionClick = (section: string) => {
    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const buttons = [
    "restaurant",
    "speisekarte",
    "services",
    "offnungszeiten",
    "standort",
  ];
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        />
      </Head>
      <Box>
        <AppBar sx={{ backgroundColor: "#DD2E35" }}>
          <Box component="nav">
            <Stack
              direction="row"
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography
                textAlign={"left"}
                sx={{
                  px: 3,
                  flexGrow: 1,
                  color: "#fff",
                  fontStyle: "italic",
                  fontSize: "20px",
                }}
              >
                City Chicken <br /> since 1960s
              </Typography>
              <IconButton
                sx={{ float: "right", mx: 2 }}
                onClick={handleDrawerToggle}
              >
                <MenuIcon sx={{ color: "#fff" }} />
              </IconButton>
            </Stack>
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "block", md: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
                <img
                  src="/logo.png"
                  style={{ width: "400px", height: "80px" }}
                  alt="climateChange"
                />
                <Divider />
                <List>
                  {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                      <ListItemButton
                        sx={{
                          textTransform: "capitalize",
                          textAlign: "center",
                        }}
                        onClick={() => window.location.replace(`#${item}`)}
                      >
                        <ListItemText primary={item} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </Box>
        </AppBar>

        <AppBar
          position="sticky"
          sx={{
            backgroundColor: "#fff",
            color: "#333",
            boxShadow: "none",
            flexDirection: { md: "row" },
            textAlign: "center",
            flexGrow: 1,
            maxHeight: "80px",
          }}
        >
          <>
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "none", lg: "flex" },
              }}
            >
              <img
                src="/logo.png"
                style={{ width: "400px", height: "80px" }}
                alt="climateChange"
              />
            </Box>
            <Toolbar
              disableGutters
              sx={{
                justifyContent: "space-between",
                flexDirection: { xs: "row", sm: "row" },
                alignItems: { xs: "center" },
                backgroundColor: "#DD2E35",
                flexGrow: 1,
                display: { md: "none", lg: "flex", sm: "none", xs: "none" },
              }}
            >
              <Typography
                textAlign={"left"}
                sx={{
                  p: 3,
                  flexGrow: 1,
                  color: "#fff",
                  fontStyle: "italic",
                  fontSize: "20px",
                }}
              >
                City Chicken <br /> since 1960s
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  marginBottom: { xs: 2, sm: 0 },
                  flexGrow: 1,
                }}
              >
                <Box>
                  {buttons?.map((button) => (
                    <Button
                      key={button}
                      color="inherit"
                      sx={{
                        float: "left",
                        marginRight: 2,
                        textTransform: "capitalize   !important",
                        color: "#fff",
                        fontFamily: "inter",
                        marginBottom: { xs: 0, sm: 0, md: -4 },
                      }}
                      onClick={() => handleSectionClick(`${button}`)}
                    >
                      {button}
                      {activeSection == `${button}` && (
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 2,
                            left: 0,
                            right: 0,
                            height: 3,
                            backgroundColor: "yellow",
                            color: "#fff",
                          }}
                        />
                      )}
                    </Button>
                  ))}
                </Box>
              </Box>
              <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
                <Box>
                  <CustomButton
                    sx={{
                      maxWidth: "98px",
                      width: "100%",
                      fontFamily: "League Spartan !important",
                      fontSize: "0.875rem",
                      borderRadius: "8px !important",
                      color: "#000",
                      padding: "10px 20px",
                      backgroundColor: "#D9D9D9 !important",
                      boxShadow: "none",

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
                </Box>
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
                <Typography mt={4} mr={5} sx={{ color: "#fff" }}>
                  Food Food <br /> Business Partner
                </Typography>
              </Box>
            </Toolbar>
          </>
        </AppBar>

        <section id="restaurant" style={{}}>
          <Box sx={{ pt: 0 }}>
            <Box
              sx={{
                backgroundImage: 'url("/Restaurant.png")',
                backgroundSize: "cover",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: 0,
                width: "100%",
              }}
            ></Box>
          </Box>
        </section>
        <section id="speisekarte" style={{}}>
          <Container maxWidth="xl" sx={{ pt: 10 }}>
            <About />
            <SliderComponent />
          </Container>
        </section>
        <section id="services" style={{}}>
          <Container maxWidth="lg" sx={{ pt: 10 }}>
            <AvailableOnSection />
            <Service />
          </Container>
        </section>
        <section
          id="offnungszeiten"
          style={{ backgroundColor: "#fff", minHeight: "100vh" }}
        >
          <Container maxWidth="lg" sx={{ pt: 10 }}>
            <Payments />
          </Container>
          <Container maxWidth="lg" sx={{ pt: 10 }}>
            <Timings />
          </Container>
        </section>
        <section
          id="standort"
          style={{ backgroundColor: "#fff", minHeight: "100vh" }}
        >
          <Box>
            <BerlinMap />
          </Box>
        </section>
      </Box>
    </>
  );
};

export default LandingPage;
