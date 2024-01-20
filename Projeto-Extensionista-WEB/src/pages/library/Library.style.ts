import { makeSxStyles } from "../../config/makeSxStyles";
import { colors } from "../../config/theme";

export const sxStyle = makeSxStyles({
  boxMain: {
    width: "100%",
    minHeight: "calc(100vh - 60.81px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  card: {
    width: "100%",
    display: "flex",
    maxWidth: "18rem",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    margin: "auto",
    gap: "1.25rem",
    padding: "1.25rem",
    backgroundColor: colors.neutralHighMedium,
    borderRadius: "0.5rem",
    border: `1px solid ${colors.neutralHighDarkest}`,
  },
  title: {
    fontSize: "0.875rem",
    fontWeight: 500,
    color: colors.neutralLowDark,
  },
  books: {
    display: "flex",
    gap: "1.25rem",
    overflowX: "auto",
  },
  logo: {
    width: "100%",
    maxWidth: "5rem",
    height: "auto",
  },
});
