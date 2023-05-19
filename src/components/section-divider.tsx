import * as React from "react";

import Box from "@mui/material/Box";

interface Props {
  isGray?: boolean;
  id?: string;
}

const SectionDivider: React.FC<Props> = ({ isGray, id }) => {
  return (
    <Box
      id={id}
      sx={{
        width: "100%",
        height: "14px",
        backgroundColor: isGray ? "#E5E5E5" : "#ffffff",
      }}
    ></Box>
  );
};

export default SectionDivider;
