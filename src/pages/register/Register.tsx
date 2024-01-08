import React from "react";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import logo from "../../assets/image.png";
import { MenuHeader } from "../../components/MenuHeader/MenuHeader";
import "./Register.css";

export const Register: React.FC = () => {
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
          Cadastro
        </Typography>
        <Box className="login-container">
          <TextField
            className="input-field"
            label="Nome completo"
            variant="outlined"
          />
          <TextField
            className="input-field"
            label="Data de nascimento"
            variant="outlined"
          />
          <TextField
            className="input-field"
            label="Nome da mãe"
            variant="outlined"
          />
          <TextField
            className="input-field"
            label="Cidade"
            variant="outlined"
          />
          <TextField className="input-field" label="UF" variant="outlined" />
          <TextField
            className="input-field"
            label="Escola"
            variant="outlined"
            select
          >
            <MenuItem value="">Selecione uma escola</MenuItem>
            <MenuItem value="escola1">Escola 1</MenuItem>
            <MenuItem value="escola2">Escola 2</MenuItem>
            <MenuItem value="escola3">Escola 3</MenuItem>
          </TextField>
          <TextField className="input-field" label="Turma" variant="outlined" />
          <TextField
            className="input-field"
            label="Email"
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
          CADASTRAR
        </Button>
        <Typography
          sx={{
            marginTop: "20px",
            textAlign: "center",
            color: "text.secondary",
            fontSize: "12px",
          }}
        >
          Já possui uma conta?{" "}
          <a href="/" style={{ color: "#8A2BE2" }}>
            Entre aqui.
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Register;
