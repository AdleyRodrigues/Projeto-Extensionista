import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import logo from "../../assets/image.png";
import { MenuHeader } from "../../components/MenuHeader/MenuHeader";
import "./Login.css";

export const Login: React.FC = () => {
  // Você pode adicionar aqui o estado e as funções, com tipos explícitos se necessário.

  return (
    <Box className="box-main">
      <MenuHeader />
      <Box className="box-login-container">
        <img
          src={logo}
          alt="Logo"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <Typography variant="h4" sx={{ margin: "20px 0", textAlign: "center" }}>
          Login
        </Typography>
        <Box className="login-container">
          <TextField
            className="input-field"
            label="E-mail"
            type="email"
            variant="outlined"
          />
          <TextField
            className="input-field"
            label="Senha"
            type="password"
            variant="outlined"
          />
        </Box>
        <Button className="login-button" variant="contained">
          ENTRAR
        </Button>
        <Typography
          sx={{
            marginTop: "20px",
            textAlign: "center",
            color: "text.secondary",
            fontSize: "12px",
          }}
        >
          Ainda não possui login?{" "}
          <a href="/register" style={{ color: "#8A2BE2" }}>
            Cadastre-se aqui.
          </a>
        </Typography>
      </Box>
    </Box>
  );
};
