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
    items: 4,
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
    width: 74px;
    height: 74px;
    background-color: #dd2e35 !important;

    :hover {
      background-color: #dd2e35;
    }
  `;
  const CustomRight = ({ onClick }: { onClick?: any }) => {
    return (
      <CustomFab
        size="large"
        onClick={() => onClick()}
        aria-label="right-arrow"
        sx={{
          position: "absolute",
          top: "45%",
          right: "48px",
          display: { xs: "none", md: "block" },
        }}
      >
        <KeyboardArrowRightIcon sx={{ color: "#F7AB3C", fontSize: 64 }} />
      </CustomFab>
    );
  };
  const CustomLeft = ({ onClick }: { onClick?: any }) => {
    return (
      <CustomFab
        size="large"
        onClick={() => onClick()}
        color="primary"
        aria-label="left-arrow"
        sx={{
          position: "absolute",
          top: "45%",
          left: "48px",
          backgroundColor: "#DD2E35",
          display: { xs: "none", md: "block" },
        }}
      >
        <KeyboardArrowLeftIcon sx={{ color: "#F7AB3C", fontSize: 64 }} />
      </CustomFab>
    );
  };

  return (
    <Carousel
      itemClass="ml-[.165rem] lg:ml-0 max-w-[415px] lg:max-w-[430px] xl:max-w-[452px]"
      partialVisbile={false}
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
            width: { xs: "340px", xl: "412px" },
            height: { xs: "340px", xl: "412px" },
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <img src={image} width="100%" height="100%" alt="carousel item" />
          </Box>
        </Box>
      ))}
    </Carousel>
  );
};

export default HomeSlider;
