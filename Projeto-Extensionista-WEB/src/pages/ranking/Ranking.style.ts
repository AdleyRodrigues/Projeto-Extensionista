import { makeSxStyles } from "../../config/makeSxStyles";
import { colors, theme } from "../../config/theme";

export const sxStyle = makeSxStyles({
  title: {
    width: "100%",
    fontSize: "1.125rem",
    fontWeight: 500,
  },
  filters: {
    width: "100%",
    display: "flex",
    gap: "1rem",
    [theme.breakpoints.down(450)]: {
      flexDirection: "column",
    },
  },
  col: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    [theme.breakpoints.down(800)]: {
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
    [theme.breakpoints.down(450)]: {
      justifyContent: "center",
    },
  },
  table: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  tableContainer: {
    maxWidth: "15rem",
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
