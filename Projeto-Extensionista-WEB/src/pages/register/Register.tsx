import React from "react";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import logo from "../../assets/image.png";
import { sxStyle } from "./Register.style";
import { schools, states } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

export const Register: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (path: string) => () => {
    navigate(path);
  };

  return (
    <Box sx={sxStyle.boxMain}>
      <Box sx={sxStyle.boxLoginContainer}>
        <Box component="img" src={logo} alt="Logo" sx={sxStyle.logo} />
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
          <TextField
            sx={sxStyle.inputField}
            label="UF"
            variant="outlined"
            select
          >
            {states.map((state) => (
              <MenuItem key={state.value} value={state.value}>
                {state.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            sx={sxStyle.inputField}
            label="Escola"
            variant="outlined"
            select
          >
            {schools.map((school) => (
              <MenuItem key={school.value} value={school.value}>
                {school.label}
              </MenuItem>
            ))}
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
        <Button variant="contained" onClick={handleClick("/")}>
          CADASTRAR
        </Button>
        <Box sx={sxStyle.footerText}>
          Já possui uma conta?{" "}
          <Box component="a" href="/" color="#8A2BE2">
            Entre aqui.
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
