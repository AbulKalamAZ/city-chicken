import { Box, IconButton, Menu, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "@/styles/theme";
import CustomButton from "./common/custom-button";

interface Props {
  signIn?: any;
}
const pages = [
  "Funding",
  "Events",
  "Job Board",
  "Organizations",
  "News",
  "About us",
  "Contact",
];

const MobileNavigation: React.FC<Props> = ({ signIn }) => {
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: {
            xs: "flex",
            md: "none",
          },
          textAlign: "center",
        }}
      >
        <IconButton
          size="large"
          onClick={handleOpenNavMenu}
          sx={{ color: "#002329", textAlign: "center" }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
            color: "#000",
          }}
        >
          {pages.map((page) => (
            <Typography
              sx={{
                fontFamily: "League Spartan !important",
                padding: "11px 40px",
                margin: "0px",
                cursor: "pointer",
              }}
              key={page}
              onClick={handleCloseNavMenu}
            >
              <Typography textAlign="center">{page}</Typography>
            </Typography>
          ))}
          <CustomButton
            sx={{
              maxWidth: "88px",
              width: "100%",
              fontFamily: "League Spartan !important",
              height: "44px",
              fontSize: "0.875rem",
              borderRadius: "8px !important",
              color: "#FFFFFF",
              margin: "0px 0px 10px 50px",
              backgroundColor: "#002329 !important",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#fff !important",
                boxShadow: "none",
                border: "1px solid #C4C4C4",
                color: theme.palette.text.primary,
              },
            }}
            size="small"
            text="Join us"
            variant="contained"
            type="submit"
          />
          {signIn ? (
            <CustomButton
              sx={{
                maxWidth: "98px",
                width: "100%",
                height: "44px",
                fontFamily: "League Spartan !important",
                fontSize: "0.875rem",
                borderRadius: "8px !important",
                color: "#002329",
                backgroundColor: "#fff !important",
                boxShadow: "none",
                margin: "0px 0px 10px 50px",
                borderColor: "#CCCCCC",

                "&:hover": {
                  backgroundColor: "#002329 !important",
                  color: "#fff",
                  borderColor: "#CCCCCC",
                },
              }}
              size="small"
              text="Sign In"
              variant="outlined"
              type="submit"
            />
          ) : null}
        </Menu>
      </Box>
    </>
  );
};

export default MobileNavigation;
