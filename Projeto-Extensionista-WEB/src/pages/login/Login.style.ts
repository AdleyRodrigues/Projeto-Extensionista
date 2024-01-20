import { makeSxStyles } from "../../config/makeSxStyles";

export const sxStyle = makeSxStyles({
  boxMain: {
    backgroundColor: "#f0f0f0",
  },
  boxLoginContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "500px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#d0c2e2",
    borderRadius: "5%",
  },
  loginContainer: {
    width: "100%",
    padding: "1rem",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  inputField: {
    width: "100%",
    marginBottom: "1rem",
  },
  loginButton: {
    marginBottom: "1rem",
  },
  footerText: {
    marginTop: 20,
    textAlign: "center",
    color: "#666",
    fontSize: 12,
  },
  "@media (max-width: 375px)": {
    loginContainer: {
      padding: "0.25rem",
    },
    inputField: {
      fontSize: "1rem",
      marginBottom: "0.5rem",
    },
    loginButton: {
      padding: "0.75rem",
    },
    title: {
      fontSize: "1rem",
    },
    logo: {
      fontSize: "1rem",
    },
    footerText: {
      fontSize: "1rem",
    },
  },
  "@media (max-width: 500px)": {
    loginContainer: {
      padding: "0.25rem",
    },
    boxLoginContainer: {
      borderRadius: "0%",
      height: "100%",
      justifyContent: "flex-start",
    },
    inputField: {
      fontSize: "0.8rem",
    },
  },
});
