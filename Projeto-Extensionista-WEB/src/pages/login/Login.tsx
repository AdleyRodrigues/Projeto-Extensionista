import React from "react";
import logo from "../../assets/image.png";
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
        <img
          src={logo}
          alt="Logo"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <Typography variant="h4" sx={{ margin: "20px 0", textAlign: "center" }}>
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
        <Button
          sx={sxStyle.loginButton}
          variant="contained"
          onClick={handleClick("/library")}
        >
          ENTRAR
        </Button>
        <Typography sx={sxStyle.footerText}>
          Ainda não possui login?{" "}
          <a href="/register" style={{ color: "#8A2BE2" }}>
            Cadastre-se aqui.
          </a>
        </Typography>
      </Box>
    </Box>
  );
};
