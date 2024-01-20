import { makeSxStyles } from "../../../config/makeSxStyles";
import { colors } from "../../../config/theme";

export const sxStyle = makeSxStyles({
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
});
