import { Box } from "@mui/material";
import { sxStyle } from "./CardRoot.style";
import { ReactNode } from "react";

interface CardRootProps {
  children?: ReactNode;
}

export const CardRoot = ({ children }: CardRootProps) => {
  return <Box sx={sxStyle.card}>{children} </Box>;
};
