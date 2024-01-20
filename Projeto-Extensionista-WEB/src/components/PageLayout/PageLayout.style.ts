import { makeSxStyles } from "../../config/makeSxStyles";

export const sxStyle = makeSxStyles({
  mainBox: {
    width: "100%",
    minHeight: "100vh",
  },
  children: {
    minHeight: "calc(100vh - 7.801rem)",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent : "center",
  },
});
