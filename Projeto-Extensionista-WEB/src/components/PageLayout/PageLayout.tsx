import { Box } from "@mui/material";
import { sxStyle } from "./PageLayout.style";
import { MenuHeader } from "../MenuHeader/MenuHeader";
import { ReactNode } from "react";

interface PageLayoutProps {
  children?: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <Box sx={sxStyle.mainBox}>
      <MenuHeader />
      <Box sx={sxStyle}>{children}</Box>
    </Box>
  );
};
