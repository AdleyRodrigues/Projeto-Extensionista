import { Box, SxProps, Theme } from "@mui/material";
import { sxStyle } from "./PageLayout.style";
import { MenuHeader } from "../MenuHeader/MenuHeader";
import { ReactNode } from "react";

interface PageLayoutProps {
  children?: ReactNode;
  gap?: string;
}

export const PageLayout = ({ children, gap }: PageLayoutProps) => {
  return (
    <Box sx={sxStyle.mainBox}>
      <MenuHeader />
      <Box sx={{ gap: { gap }, ...sxStyle.children }}>{children}</Box>
    </Box>
  );
};
