import { Button, NoSsr, Theme, Typography } from "@mui/material";
import React from "react";

type VariantProps = "text" | "outlined" | "contained" | undefined;

interface Props {
  variant: VariantProps;
  startIcon?: any;
  size: any;
  loading?: any;
  text: string;
  onClick?: any;
  type: any;
  className?: any;
  sx?: any;
}

const CustomButton: React.FC<Props> = ({
  variant,
  type,
  sx,
  startIcon,
  size,
  text,
  onClick,
  className,
}) => {
  return (
    <>
      <NoSsr>
        <Button
          className="Button"
          variant={variant}
          sx={sx}
          startIcon={startIcon}
          size={size}
          onClick={onClick}
          type={type}
        >
          {text}
        </Button>
      </NoSsr>
    </>
  );
};

export default CustomButton;
