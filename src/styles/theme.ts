import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
      fontFamily: [
        '"League Spartan"'
      ].join(","),
    },
    palette: {
      primary: {
        main: "#D5E7BE",
        light: "#F0F7FF ",
        dark: "#002329",

      },
      secondary: {
        main: "#FFF",
        light: "#F9FBFD",
        dark:"#3E8C67"
      },
      
      text: {
        primary: "#002329",
        secondary: "#3E8C67"
    
      },
     
      grey: {
        50: "#616161",
        100: "#474747",
        600: "#CCCCCC",
      },
     
    },
  });
  
  export default theme;