import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { landingImage } from "@/data/landingimage";

const LandingPageContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `url({/${landingImage.image}}")`,
  backgroundSize: "cover !important",
  backgroundPosition: "center !important",
  backgroundRepeat: "no-repeat !important",
  backgroundAttachment: "fixed !important",
  height: "auto",
  mx: 0,
}));

const LandingPage: React.FC = () => {
  return <LandingPageContainer className="background"></LandingPageContainer>;
};

export default LandingPage;
