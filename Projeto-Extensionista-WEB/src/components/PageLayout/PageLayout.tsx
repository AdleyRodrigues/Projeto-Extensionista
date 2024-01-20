import { Box, SxProps, Theme } from "@mui/material";
import { sxStyle } from "./PageLayout.style";
import { MenuHeader } from "../MenuHeader/MenuHeader";
import { ReactNode } from "react";

interface PageLayoutProps {
  children?: ReactNode;
  sx?: SxProps<Theme>;
}

export const PageLayout = ({ children, sx }: PageLayoutProps) => {
  return (
    <Box sx={sxStyle.mainBox}>
      <MenuHeader />
      <Box sx={sxStyle.children}>{children}</Box>
    </Box>
  );
};
