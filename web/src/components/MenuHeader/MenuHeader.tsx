import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { sxStyle } from "./MenuHeader.style";
import logo from "../../assets/logo.png";

export const MenuHeader: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (path: string) => () => {
    navigate(path);
  };

  return (
    <Box sx={sxStyle.mainBox}>
      <Box component="img" src={logo} alt="Logo" sx={sxStyle.logo} />
      <Box sx={sxStyle.links}>
        <Button onClick={handleClick("/library")}>Biblioteca</Button>
        <Button onClick={handleClick("/ranking")}>Ranking</Button>
        <Button onClick={handleClick("/about")}>Sobre</Button>
        <Button onClick={handleClick("/participate")}>Participe</Button>
        <Button onClick={handleClick("/")}>Sair</Button>
      </Box>
    </Box>
  );
};
