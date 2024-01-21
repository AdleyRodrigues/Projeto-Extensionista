import { Box } from "@mui/material";
import { sxStyle } from "./CardRoot.style";
import { ReactNode } from "react";

interface CardRootProps {
  children?: ReactNode;
  maxWidth?: string;
  flexDirection?: "row" | "column";
  display?: "grid" | "flex";
}

export const CardRoot = ({
  children,
  maxWidth,
  flexDirection,
  display,
}: CardRootProps) => {
  return (
    <Box
      sx={{
        flexDirection: { flexDirection },
        maxWidth: { maxWidth },
        display: { display },
        ...sxStyle.card,
      }}
    >
      {children}
    </Box>
  );
};
