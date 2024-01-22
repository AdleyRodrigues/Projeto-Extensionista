import { makeSxStyles } from "../../config/makeSxStyles";
import { colors } from "../../config/theme";

export const sxStyle = makeSxStyles({
  boxMain: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.25rem",
    flexDirection: "column",
  },
  pageTitle: {
    fontSize: "2rem",
    fontWeight: 700,
    textAlign: "center",
    color: colors.neutralLowDark,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
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
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  description: {
    fontSize: "0.875rem",
    color: colors.gray,
  },
  books: {
    display: "flex",
    gap: "1.25rem",
    overflowX: "auto",
    flexDirection: { xs: "column", md: "row" },
  },
  cover: {
    width: "100%",
    maxWidth: "5rem",
    height: "auto",
    cursor: "pointer",
    placeSelf: "center",
  },
});
