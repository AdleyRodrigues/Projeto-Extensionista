import { makeSxStyles } from "../../config/makeSxStyles";
import { colors } from "../../config/theme";

export const sxStyle = makeSxStyles({
  boxMain: {
    backgroundColor: "#f0f0f0",
    minHeight: "100vh",
    display: "flex",
    placeItems: "center",
  },
  boxLoginContainer: {
    width: "100%",
    display: "flex",
    maxWidth: "18rem",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    margin: "auto",
    gap: "1.25rem",
    padding: "1.75rem",
    backgroundColor: "#d0c2e2",
    borderRadius: "0.5rem",
    border: `1px solid ${colors.neutralHighDarkest}`,
  },
  logo: {
    width: "100%",
    maxWidth: "8rem",
    height: "auto",
  },
  loginContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
  },
  inputField: {
    width: "100%",
  },
  footerText: {
    fontFamily: "Roboto, sans-serif",
    textAlign: "center",
    color: "#666",
    fontSize: 12,
  },
});
