import { SxProps, Theme } from "@mui/material";
interface makeSxStylesProps {
  [key: string]: SxProps<Theme>;
}

export const makeSxStyles = (styles?: makeSxStylesProps) => {
  return styles || {};
};

export const props = (props?: object) => {
  return props || {};
};
