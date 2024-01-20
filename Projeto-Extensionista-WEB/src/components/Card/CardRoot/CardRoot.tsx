import { Box } from "@mui/material";
import { sxStyle } from "./CardRoot.style";
import { ReactNode } from "react";

interface CardRootProps {
  children?: ReactNode;
  maxWidth?: string;
  flexDirection?: "row" | "column";
}

export const CardRoot = ({
  children,
  maxWidth,
  flexDirection,
}: CardRootProps) => {
  return (
    <Box
      sx={{ 
        flexDirection: { flexDirection },
        maxWidth: { maxWidth },
        ...sxStyle.card,
      }}
    >
      {children}
    </Box>
  );
};
