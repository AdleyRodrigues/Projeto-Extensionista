import { Box, Typography } from "@mui/material";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { sxStyle } from "./bookDetails.style";
import { CardRoot } from "../../components/Card/CardRoot/CardRoot";
import { useParams } from "react-router-dom";
import { fetchBookById } from "../../services/api";
import { useEffect, useState } from "react";
import { IBook } from "../../utils/interface";

export const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState<IBook>({
    id: 0,
    author: "",
    format: "",
    img: "",
    pages: 0,
    quantityRecyclablesNeeded: "",
    readingAge: "",
    title: "",
  });

  useEffect(() => {
    if (bookId) {
      const parsedBookId = parseInt(bookId, 10);

      if (!isNaN(parsedBookId)) {
        fetchBookById(parsedBookId)
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
        <Box
          component="img"
          src={book.img}
          alt={book.title}
          sx={sxStyle.book}
        />
        {/* Adicione aqui a lógica para exibir as informações específicas do livro */}
      </CardRoot>
    </PageLayout>
  );
};
