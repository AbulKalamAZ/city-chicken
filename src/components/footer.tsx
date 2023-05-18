import { Box, Container, Grid, Typography } from "@mui/material";
const footerLinks = ["Impressum", "Datenschutz", "AGB", "© CNetX GmbH"];
const Footer = () => {
  return (
    <footer>
      <Box sx={{ mt: 15, p: 4, background: "#000000" }}>
        <Container maxWidth="md">
          <Grid container>
            {footerLinks.map((link) => (
              <Grid
                item
                key={link}
                xs={6}
                sm={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    cursor: "pointer",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 700,
                    "&:hover": { color: "#F7AB3C" },
                  }}
                >
                  {link}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
