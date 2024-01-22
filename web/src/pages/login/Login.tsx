import React from "react";
import logo from "../../assets/logo.png";
import { Box, Button, TextField, Typography } from "@mui/material";
import { sxStyle } from "./Login.style";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (path: string) => () => {
    navigate(path);
  };

  return (
    <Box sx={sxStyle.boxMain}>
      <Box sx={sxStyle.boxLoginContainer}>
        <Box component="img" src={logo} alt="Logo" sx={sxStyle.logo} />
        <Typography variant="h4" textAlign="center">
          Login
        </Typography>
        <Box sx={sxStyle.loginContainer}>
          <TextField
            sx={sxStyle.inputField}
            label="E-mail"
            type="email"
            variant="outlined"
          />
          <TextField
            sx={sxStyle.inputField}
            label="Senha"
            type="password"
            variant="outlined"
          />
        </Box>
        <Button variant="contained" onClick={handleClick("/library")}>
          ENTRAR
        </Button>
        <Box sx={sxStyle.footerText}>
          Ainda não possui login?{" "}
          <Box component="a" href="/register" color="#8A2BE2">
            Cadastre-se aqui.
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
