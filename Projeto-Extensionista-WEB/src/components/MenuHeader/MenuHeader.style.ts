import { makeSxStyles } from "../../config/makeSxStyles";

export const sxStyle = makeSxStyles({
  mainBox: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0.5rem 3rem",
    backgroundColor: "#f0f0f0",
    borderBottom: "1px solid #ccc",
    boxSizing: "border-box",
  },
  logo: {
    width: "100%",
    maxWidth: "4rem",
    height: "auto",
  },
  links: {
    display: "flex",
    gap: "1.25rem"
  },
});
