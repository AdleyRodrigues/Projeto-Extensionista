import { Box, Typography } from "@mui/material";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { sxStyle } from "./bookDetails.style";
import { CardRoot } from "../../components/Card/CardRoot/CardRoot";
import { useParams } from "react-router-dom";
import { getBookDetailsById } from "../../services/api";
import { useEffect, useState } from "react";
import { BookInfoItem, IBook } from "../../utils/interface";
import { bookInfo, variableMap } from "../../utils/constants";

export const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState<IBook>({ id: 0 });

  useEffect(() => {
    if (bookId) {
      const parsedBookId = parseInt(bookId, 10);

      if (!isNaN(parsedBookId)) {
        getBookDetailsById(parsedBookId)
          .then((bookDetails) => setBook(bookDetails))
          .catch((error) => console.error(error));
      } else {
        console.error("Invalid bookId:", bookId);
      }
    }
  }, [bookId]);

  return (
    <PageLayout>
      <Typography sx={sxStyle.pageTitle}>Detalhes do livro</Typography>
      <CardRoot maxWidth="fit-content" flexDirection="row">
        <Box sx={sxStyle.bookInfo}>
          {bookInfo.map((info: BookInfoItem) => (
            <Box sx={sxStyle.info} key={info.id}>
              <Typography sx={sxStyle.subTitle}>{info.subTile}</Typography>
              <Typography sx={sxStyle.text}>
                {variableMap[info.text] ? book[variableMap[info.text]] : ""}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardRoot>
    </PageLayout>
  );
};
