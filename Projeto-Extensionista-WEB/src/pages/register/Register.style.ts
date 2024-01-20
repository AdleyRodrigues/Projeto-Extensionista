import { makeSxStyles } from "../../config/makeSxStyles";
import { theme } from "../../config/theme";

export const sxStyle = makeSxStyles({
  boxMain: {
    backgroundColor: "#f0f0f0",
    height: "100%",
  },
  boxLoginContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 500,
    margin: "auto",
    padding: 20,
    backgroundColor: "#d0c2e2",
    borderRadius: "5%",
    [theme.breakpoints.down(500)]: {
      borderRadius: "0%",
      height: "100%",
      justifyContent: "flex-start",
    },
  },
  loginContainer: {
    width: "100%",
    padding: "1rem",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    [theme.breakpoints.down(375)]: {
      padding: "0.25rem",
    },
    [theme.breakpoints.down(500)]: {
      padding: "0.25rem",
    },
  },
  inputField: {
    width: "100%",
    marginBottom: "1rem",
    [theme.breakpoints.down(375)]: {
      fontSize: "1rem",
      marginBottom: "0.5rem",
    },
    [theme.breakpoints.down(500)]: {
      fontSize: "0.8rem",
    },
  },
  loginButton: {
    marginBottom: "1rem",
    [theme.breakpoints.down(375)]: {
      fontSize: "1rem",
      marginBottom: "0.5rem",
      padding: "0.75rem",
    },
    [theme.breakpoints.down(500)]: {
      fontSize: "0.8rem",
    },
  },
  footerText: {
    marginTop: 20,
    textAlign: "center",
    color: "#666",
    fontSize: 12,
    [theme.breakpoints.down(375)]: {
      fontSize: "1rem",
    },
  },
});
