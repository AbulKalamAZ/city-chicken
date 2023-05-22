import About from "@/components/about";
import CustomButton from "@/components/common/custom-button";
import Footer from "@/components/footer";
import ImageSlider from "@/components/home-slider";
import BerlinMap from "@/components/map";
import AvailableOnSection from "@/components/mobile-application";
import Payments from "@/components/payments";
import SectionDivider from "@/components/section-divider";
import Service from "@/components/service";
import Timings from "@/components/timings";
import { colors } from "@/data/colors";
import theme from "@/styles/theme";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
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
  const router = useRouter();

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
      const elementTop = element.getBoundingClientRect().top;
      const pageY = window.pageYOffset;
      const customOffsetValue = -120;

      const combinedValue = elementTop + pageY + customOffsetValue;

      window.scrollTo({
        top: combinedValue,
        behavior: "smooth",
      });
    }
  };
  const isBrowser = () => typeof window !== "undefined";

  const handleRefresh = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        {/* <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        /> */}
      </Head>
      <Box>
        <AppBar sx={{ backgroundColor: "#DD2E35", display: { lg: "none" } }}>
          <Box
            component="nav"
            sx={
              {
                // padding: "16px",
              }
            }
          >
            <Stack
              direction="row"
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box
                sx={{
                  display: {
                    xs: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: "20px",
                  },
                }}
                onClick={handleRefresh}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "120px",
                    height: "80px",
                  }}
                >
                  <img
                    src="/logo_bg_rmv.png"
                    style={{
                      width: "50px",
                      height: "40px",
                    }}
                  />
                </Box>

                <Typography
                  textAlign={"left"}
                  sx={{
                    color: "#fff",
                    fontSize: "1.25rem",
                    fontWeight: 400,
                    fontFamily: "Contrail One !important",
                  }}
                >
                  City Chicken
                  <span
                    style={{
                      display: "block",
                      fontSize: "0.75rem",
                      fontFamily: "Inter!important",
                    }}
                  >
                    Das Original seit 1996
                  </span>
                </Typography>
              </Box>

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
                  src="/logo_bg_rmv.png"
                  style={{
                    width: "80px",
                    height: "64px",
                    margin: "8px auto",
                  }}
                  alt="logo"
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
          sx={{
            backgroundColor: "#fff",
            color: "#333",
            boxShadow: "none",
            flexDirection: { md: "row" },
            textAlign: "center",
            flexGrow: 1,
            maxHeight: "121px",
          }}
        >
          <>
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "none", lg: "flex" },
              }}
              onClick={handleRefresh}
            >
              <img
                src="/logo.svg"
                style={{
                  width: "280px",
                  height: "121px",
                }}
              />
            </Box>
            <Toolbar
              disableGutters
              sx={{
                justifyContent: "space-between",
                flexDirection: { xs: "row", sm: "row" },
                alignItems: { xs: "center", md: "center", lg: "center" },
                backgroundColor: `${colors.backgroundColor}`,
                flexGrow: 1,
                display: { md: "none", lg: "flex", sm: "none", xs: "none" },
              }}
            >
              <Box sx={{ textAlign: "left" }}>
                <Typography
                  textAlign={"left"}
                  sx={{
                    px: { xs: 2, xl: 3 },
                    color: "#fff",
                    fontSize: {
                      xs: "24px",
                      lg: "28px",
                      xl: "40px",
                    },
                    fontWeight: 400,
                    fontFamily: "Contrail One !important",
                  }}
                >
                  City Chicken{" "}
                </Typography>
                <Typography
                  sx={{
                    px: { xs: 2, xl: 3 },
                    flexGrow: 1,
                    color: "#fff",
                    fontWeight: 400,
                    fontFamily: "Contrail One !important",
                    fontSize: "0.875rem",
                  }}
                >
                  Das Original seit 1996
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: { xs: 2, sm: 0 },
                }}
              >
                <Box>
                  {buttons?.map((button) => (
                    <Button
                      key={button}
                      color="inherit"
                      sx={{
                        float: "left",
                        marginRight: { lg: 0.35, xl: 2 },
                        marginLeft: { lg: 0.35, xl: 2 },
                        textTransform: "capitalize   !important",
                        color: "#fff",
                        fontFamily: "Inter !important",
                        marginBottom: { xs: 0, sm: 0, md: -4 },
                        fontWeight: 400,
                        fontSize: { md: "14px", lg: "14px", xl: "20px" },
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
                            borderRadius: "2px",
                            backgroundColor: `${colors.secondaryColor}`,
                            color: "#fff",
                          }}
                        />
                      )}
                    </Button>
                  ))}
                </Box>
              </Box>
              <Box
                sx={{
                  display: { xs: "none", sm: "none", md: "flex" },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CustomButton
                  sx={{
                    maxWidth: "62px",
                    fontFamily: "Inter !important",
                    fontSize: "14px",
                    color: "#000",
                    padding: "10px 20px",
                    backgroundColor: "#D9D9D9 !important",
                    boxShadow: "none",
                    textTransform: "capitalize",
                    borderRadius: "0px !important",
                    fontWeight: 600,
                    height: "32px !important",

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
                    color: "#fff",
                    fontFamily: "Inter !important",
                    textAlign: "left",
                    fontSize: "14px",
                    lineHeight: 1.2,
                    position: "relative",
                    top: "1px",
                  }}
                >
                  foodfood <br />{" "}
                  <span style={{ fontSize: "10px" }}>Business Partner</span>
                </Typography>
              </Box>
            </Toolbar>
          </>
        </AppBar>

        <section id="" style={{}}>
          <Box sx={{ pt: 0 }}>
            <Box
              sx={{
                backgroundImage: 'url("/Restaurant.png")',
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: { xs: "50vh", md: "100vh" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: 0,
                width: "100%",
              }}
            ></Box>
          </Box>
          <SectionDivider />
        </section>
        <section id="restaurant" style={{}}>
          <Container maxWidth="lg" sx={{ pt: 16, pb: 6 }}>
            <About />
          </Container>
          <Box sx={{ mb: 16 }}>
            <ImageSlider />
          </Box>

          <SectionDivider />
        </section>
        <section id="speisekarte" style={{}}>
          <Container maxWidth="lg" sx={{ pt: 16 }}>
            <AvailableOnSection />
          </Container>

          <SectionDivider />
        </section>
        <section id="services">
          <Container maxWidth="lg" sx={{ pt: 16 }}>
            <Service />

            <Payments />
          </Container>

          <SectionDivider />
        </section>
        <section id="offnungszeiten">
          <Container sx={{ py: 16 }}>
            <Timings />
          </Container>

          <SectionDivider />
        </section>
        <section id="standort">
          <Box>
            <BerlinMap />
          </Box>
        </section>
      </Box>
      <Footer />
    </>
  );
};

export default LandingPage;
