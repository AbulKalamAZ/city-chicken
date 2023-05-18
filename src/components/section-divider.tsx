import * as React from "react";

import Box from "@mui/material/Box";

interface Props {
  isGray?: boolean;
}

const SectionDivider: React.FC<Props> = ({ isGray }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "14px",
        backgroundColor: isGray ? "#E5E5E5" : "#ffffff",
      }}
    ></Box>
  );
};

export default SectionDivider;
