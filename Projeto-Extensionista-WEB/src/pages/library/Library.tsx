import { Box, Typography } from "@mui/material";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { sxStyle } from "./Library.style";
import { CardRoot } from "../../components/Card/CardRoot/CardRoot";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getBooks } from "../../services/api";
import { IBook } from "../../utils/interface";
import { groupBooksInThrees } from "../../utils/constants";

export const Library = () => {
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks()
      .then((books) => setBooks(books))
      .catch((error) => console.error(error));
  }, []);

  const bookDetailsRoute = (bookId: number) => {
    navigate(`/book-details/${bookId}`);
  };

  const booksInGroupsOfThree = groupBooksInThrees(books);

  return (
    <PageLayout>
      <Box sx={sxStyle.boxMain}>
        <Typography sx={sxStyle.pageTitle}>Biblioteca</Typography>
        {booksInGroupsOfThree.map((group, groupIndex) => (
          <Box key={groupIndex} sx={sxStyle.books} display="flex">
            {group.map((book: IBook) => (
              <CardRoot key={book.id} maxWidth="18rem" flexDirection="column">
                <Box
                  component="img"
                  src={book.img}
                  sx={sxStyle.cover}
                  onClick={() => bookDetailsRoute(book.id)}
                />
                <Box display={"grid"} width={"100%"}>
                  <Typography sx={sxStyle.title}>{book.title}</Typography>
                  <Typography sx={sxStyle.description}>
                    {book.quantityRecyclablesNeeded} recicláveis
                  </Typography>
                </Box>
              </CardRoot>
            ))}
          </Box>
        ))}
      </Box>
    </PageLayout>
  );
};
