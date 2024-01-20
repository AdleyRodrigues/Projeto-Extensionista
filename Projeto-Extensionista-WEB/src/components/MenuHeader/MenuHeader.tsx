import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { sxStyle } from "./MenuHeader.style";

export const MenuHeader: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (path: string) => () => {
    navigate(path);
  };

  return (
    <Box sx={sxStyle.mainBox}>
      <Button onClick={handleClick("/library")}>Biblioteca</Button>
      <Button onClick={handleClick("/ranking")}>Ranking</Button>
      <Button onClick={handleClick("/about")}>Sobre</Button>
      <Button onClick={handleClick("/participate")}>Participe</Button>
      <Button onClick={handleClick("/")}>Login</Button>
      <Button onClick={handleClick("/register")}>register</Button>
      <Button onClick={handleClick("/")}>Sair</Button>
    </Box>
  );
};
