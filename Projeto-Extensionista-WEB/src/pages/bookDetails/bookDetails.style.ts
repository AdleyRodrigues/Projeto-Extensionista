import { makeSxStyles } from "../../config/makeSxStyles";
import { colors } from "../../config/theme";

export const sxStyle = makeSxStyles({
  pageTitle: {
    fontSize: "2rem",
    fontWeight: 700,
    textAlign: "center",
    color: colors.neutralLowDark,
  },
  book: {
    width: "100%",
    maxWidth: "15rem",
    height: "auto",
  },
  bookInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  },
  subTitle: {
    fontWeight: 500,
    color: colors.neutralLowDark
  },
  text: {
    color: colors.gray
  }
});
