import { Box, IconButton } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { images } from "@/data/slider-images";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1500 },
    items: 3.6,
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

interface ButtonProps {
  onClick: any;
}

const HomeSlider = () => {
  return (
    <Carousel responsive={responsive}>
      {images.map((image, index) => (
        <Box key={index}>
          <div
            style={{
              width: "412px !important",
              height: "413px !important",
            }}
          >
            <img
              src={image}
              style={{
                marginLeft: 5,
                width: "412px !important",
                height: "413px !important",
                objectFit: "inherit",
              }}
            />
          </div>
        </Box>
      ))}
    </Carousel>
  );
};

export default HomeSlider;
