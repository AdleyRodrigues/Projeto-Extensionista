import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const MenuHeader: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (path: string) => () => {
    navigate(path);
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw", // Use viewport width to ensure full width
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#f0f0f0",
        borderBottom: "1px solid #ccc",
        boxSizing: "border-box", // This ensures padding is included in the width calculation
        // "@media (max-width:600px)": {
        //   flexDirection: "column",
        //   alignItems: "flex-start",
        //   button: {
        //     width: "100%",
        //     marginBottom: "10px",
        //   },
        // },
      }}
    >
      <Button
        sx={{ border: "3px solid", backgroundColor: "aqua", color: "black" }}
        onClick={handleClick("/library")}
      >
        Biblioteca
      </Button>
      <Button
        sx={{ border: "3px solid", backgroundColor: "aqua", color: "black" }}
        onClick={handleClick("/ranking")}
      >
        Ranking
      </Button>
      <Button
        sx={{ border: "3px solid", backgroundColor: "aqua", color: "black" }}
        onClick={handleClick("/about")}
      >
        Sobre
      </Button>
      <Button
        sx={{ border: "3px solid", backgroundColor: "aqua", color: "black" }}
        onClick={handleClick("/participate")}
      >
        Participe
      </Button>
      <Button
        sx={{ border: "3px solid", backgroundColor: "aqua", color: "black" }}
        onClick={handleClick("/")}
      >
        Login
      </Button>
      <Button
        sx={{ border: "3px solid", backgroundColor: "aqua", color: "black" }}
        onClick={handleClick("/register")}
      >
        register
      </Button>
    </Box>
  );
};
