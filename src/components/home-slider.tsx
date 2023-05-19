import { images } from "@/data/slider-images";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box } from "@mui/material";
import Fab from "@mui/material/Fab";
import { styled } from "@mui/material/styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1500 },
    items: 4,
  },
  laptop: {
    breakpoint: { max: 1500, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const HomeSlider = () => {
  const CustomFab = styled(Fab)`
    background-color: #dd2e35 !important;

    :hover {
      background-color: #dd2e35;
    }
  `;
  const CustomRight = ({ onClick }: { onClick?: any }) => {
    return (
      <CustomFab
        onClick={() => onClick()}
        aria-label="right-arrow"
        sx={{
          position: "absolute",
          top: "50%",
          right: "48px",
          display: { xs: "none", md: "block" },
        }}
      >
        <KeyboardArrowRightIcon sx={{ color: "#F7AB3C", fontSize: 40 }} />
      </CustomFab>
    );
  };
  const CustomLeft = ({ onClick }: { onClick?: any }) => {
    return (
      <CustomFab
        onClick={() => onClick()}
        color="primary"
        aria-label="left-arrow"
        sx={{
          position: "absolute",
          top: "50%",
          left: "48px",
          backgroundColor: "#DD2E35",
          display: { xs: "none", md: "block" },
        }}
      >
        <KeyboardArrowLeftIcon sx={{ color: "#F7AB3C", fontSize: 40 }} />
      </CustomFab>
    );
  };

  return (
    <Carousel
      arrows
      responsive={responsive}
      infinite={true}
      customRightArrow={<CustomRight />}
      customLeftArrow={<CustomLeft />}
    >
      {images.map((image, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <img
              src={image}
              width="375"
              height="375"
              style={{ width: "375px !important", height: "375px !important" }}
              alt="carousel item"
            />
          </div>
        </Box>
      ))}
    </Carousel>
  );
};

export default HomeSlider;
