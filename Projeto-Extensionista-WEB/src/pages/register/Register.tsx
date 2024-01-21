import React, { useState } from "react";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import logo from "../../assets/image.png";
import { sxStyle } from "./Register.style";
import { schools, states } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { formData } from "../../utils/interface";
import { FormDataProps } from "../../utils/types";

export const Register: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<formData>({
    fullName: "",
    birthDate: "",
    motherName: "",
    city: "",
    birthState: "",
    school: "",
    class: "",
    email: "",
    password: "",
  });

  const handleInputChange = (key: FormDataProps, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleTextFieldChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const { name, value } = event.target;
    handleInputChange(name as FormDataProps, value);
  };

  const onSubmit = () => {
    createPost(form);
  };

  const createPost = (form: formData) => {
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        navigate("/");
      })
      .catch((err) => console.log(err));
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
            name="fullName"
            label="Nome completo"
            variant="outlined"
            value={form.fullName || ""}
            sx={sxStyle.inputField}
            onChange={handleTextFieldChange}
          />
          <TextField
            name="birthDate"
            label="Data de nascimento"
            variant="outlined"
            sx={sxStyle.inputField}
            value={form.birthDate || ""}
            onChange={handleTextFieldChange}
          />
          <TextField
            name="motherName"
            label="Nome da mãe"
            variant="outlined"
            sx={sxStyle.inputField}
            value={form.motherName || ""}
            onChange={handleTextFieldChange}
          />
          <TextField
            name="city"
            label="Cidade"
            variant="outlined"
            value={form.city || ""}
            sx={sxStyle.inputField}
            onChange={handleTextFieldChange}
          />
          <TextField
            name="birthState"
            label="UF"
            variant="outlined"
            value={form.birthState || ""}
            sx={sxStyle.inputField}
            onChange={handleTextFieldChange}
            select
          >
            {states.map((state) => (
              <MenuItem key={state.id} value={state.value}>
                {state.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            name="school"
            label="Escola"
            variant="outlined"
            value={form.school || ""}
            sx={sxStyle.inputField}
            onChange={handleTextFieldChange}
            select
          >
            {schools.map((school) => (
              <MenuItem key={school.value} value={school.value}>
                {school.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            name="class"
            label="Turma"
            variant="outlined"
            value={form.class || ""}
            sx={sxStyle.inputField}
            onChange={handleTextFieldChange}
          />
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            sx={sxStyle.inputField}
            value={form.email || ""}
            onChange={handleTextFieldChange}
          />
          <TextField
            name="password"
            label="Senha"
            type="password"
            variant="outlined"
            value={form.password || ""}
            sx={sxStyle.inputField}
            onChange={handleTextFieldChange}
          />
        </Box>
        <Button variant="contained" onClick={onSubmit}>
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
