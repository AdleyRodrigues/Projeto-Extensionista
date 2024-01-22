import { makeSxStyles } from "../../config/makeSxStyles";
import { colors, theme } from "../../config/theme";

export const sxStyle = makeSxStyles({
  pageTitle: {
    fontSize: "2rem",
    fontWeight: 700,
    textAlign: "center",
    color: colors.neutralLowDark,
  },
  title: {
    width: "100%",
    fontSize: "1.125rem",
    fontWeight: 500,
  },
  filters: {
    width: "100%",
    display: "flex",
    gap: "1rem",
    [theme.breakpoints.down(650)]: {
      flexDirection: "column",
    },
  },
  filter: {
    width: "100%",
  },
  search: {
    width: "100%",
    display: "flex",
    justifyContent: "end",
    [theme.breakpoints.down(650)]: {
      justifyContent: "center",
    },
  },
  table: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  tableContainer: {
    boxShadow: "none",
    border: `1px solid ${colors.neutralHighDarkest}`,
  },
  tableRow: {
    backgroundColor: colors.neutralHighMedium,
  },
  row: {
    padding: "0.75rem",
  },
});
