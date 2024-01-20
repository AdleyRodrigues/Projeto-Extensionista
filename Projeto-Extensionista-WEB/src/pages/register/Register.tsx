import React from "react";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import logo from "../../assets/image.png";
import { sxStyle } from "./Register.style";

export const Register: React.FC = () => {
  return (
    <Box sx={sxStyle.boxMain}>
      <Box sx={sxStyle.boxLoginContainer}>
        <img
          src={logo}
          alt="Logo"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <Typography variant="h4" sx={{ margin: "20px 0", textAlign: "center" }}>
          Cadastro
        </Typography>
        <Box sx={sxStyle.loginContainer}>
          <TextField
            sx={sxStyle.inputField}
            label="Nome completo"
            variant="outlined"
          />
          <TextField
            sx={sxStyle.inputField}
            label="Data de nascimento"
            variant="outlined"
          />
          <TextField
            sx={sxStyle.inputField}
            label="Nome da mãe"
            variant="outlined"
          />
          <TextField
            sx={sxStyle.inputField}
            label="Cidade"
            variant="outlined"
          />
          <TextField sx={sxStyle.inputField} label="UF" variant="outlined" />
          <TextField
            sx={sxStyle.inputField}
            label="Escola"
            variant="outlined"
            select
          >
            <MenuItem value="">Selecione uma escola</MenuItem>
            <MenuItem value="escola1">Ari de Sá Cavalcante</MenuItem>
            <MenuItem value="escola2">Farias Brito</MenuItem>
            <MenuItem value="escola3">Piamarta Aguanambi</MenuItem>
          </TextField>
          <TextField sx={sxStyle.inputField} label="Turma" variant="outlined" />
          <TextField
            sx={sxStyle.inputField}
            label="Email"
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
        <Button sx={sxStyle.loginButton} variant="contained">
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
