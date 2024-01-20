import { Box, Typography } from "@mui/material";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { sxStyle } from "./bookDetails.style";
import { CardRoot } from "../../components/Card/CardRoot/CardRoot";
import cleanCode from "../../assets/clean-code.png";
import { bookInfo } from "../../utils/constants";

export const bookDetails = () => {
  return (
    <PageLayout>
      <Typography sx={sxStyle.pageTitle}>Detalhes do livro</Typography>
      <CardRoot maxWidth="fit-content" flexDirection="row">
        <Box
          component="img"
          src={cleanCode}
          alt="Clean Code"
          sx={sxStyle.book}
        />
        <Box sx={sxStyle.bookInfo}>
          {bookInfo.map((info) => (
            <Box sx={sxStyle.info}>
              <Typography sx={sxStyle.subTitle}>{info.subTile}</Typography>
              <Typography sx={sxStyle.text}>{info.text}</Typography>
            </Box>
          ))}
        </Box>
      </CardRoot>
    </PageLayout>
  );
};
