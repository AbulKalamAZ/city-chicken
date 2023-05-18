import { Typography } from "@mui/material";
const About = () => {
  return (
    <>
      <Typography
        sx={{
          color: "#3B3A4A",
          fontSize: "1.7rem",
          fontWeight: 400,
          fontFamily: "Contrail One !important",
          mb: 2,
        }}
      >
        Restaurant
      </Typography>
      <Typography sx={{ color: "#838383", mb: 5 }}>
        In unserem Restaurant <br /> werden Ihnen XXX, XXX <br /> und XXX
        Speisen serviert.
      </Typography>
    </>
  );
};

export default About;
