import { Box, Typography } from "@mui/material";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { sxStyle } from "./Library.style";
import { CardRoot } from "../../components/Card/CardRoot/CardRoot";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchBooks } from "../../services/api";
import { IBook } from "../../utils/interface";

export const Library = () => {
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks()
      .then((books) => setBooks(books))
      .catch((error) => console.error(error));
  }, []);

  const booksInGroupsOfThree = Array.from(
    { length: Math.ceil(books.length / 3) },
    (_, index) => books.slice(index * 3, index * 3 + 3)
  );

  const bookDetailsRoute = (bookId: number) => {
    navigate(`/book-details/${bookId}`);
  };

  const Teste = () => {
    return (
      <>
        {booksInGroupsOfThree.map((group, groupIndex) => (
          <Box key={groupIndex} sx={sxStyle.books} display="flex">
            {group.map((book: IBook) => (
              <CardRoot
                key={book.id}
                display="grid"
                maxWidth="18rem"
                flexDirection="column"
              >
                <Box
                  component="img"
                  src={book.img}
                  sx={sxStyle.cover}
                  onClick={() => bookDetailsRoute(book.id)}
                />
                <Typography sx={sxStyle.title}>{book.title}</Typography>
              </CardRoot>
            ))}
          </Box>
        ))}
      </>
    );
  };

  return (
    <PageLayout>
      <Box sx={sxStyle.boxMain}>
        {Teste()}
        {/* <Box sx={sxStyle.container}>
          <CardRoot maxWidth="18rem" flexDirection="column">
            <Typography sx={sxStyle.title}>10 - 20 recicláveis</Typography>
            <Box sx={sxStyle.books}>
              <Box
                component="img"
                src={cleanCode}
                alt="Logo"
                sx={sxStyle.logo}
                onClick={() => navigate("/book-details")}
              />
              <Box
                component="img"
                src={cleanCode}
                alt="Logo"
                sx={sxStyle.logo}
              />
              <Box
                component="img"
                src={cleanCode}
                alt="Logo"
                sx={sxStyle.logo}
              />
            </Box>
          </CardRoot>
          <CardRoot maxWidth="18rem" flexDirection="column">
            <Typography sx={sxStyle.title}>60 - 80 recicláveis</Typography>
            <Box sx={sxStyle.books}>
              <Box
                component="img"
                src={understandingAlgorithms}
                alt="Logo"
                sx={sxStyle.logo}
              />
              <Box
                component="img"
                src={understandingAlgorithms}
                alt="Logo"
                sx={sxStyle.logo}
              />
              <Box
                component="img"
                src={understandingAlgorithms}
                alt="Logo"
                sx={sxStyle.logo}
              />
            </Box>
          </CardRoot>
        </Box>
        <Box sx={sxStyle.container}>
          <CardRoot maxWidth="18rem" flexDirection="column">
            <Typography sx={sxStyle.title}>30 - 50 recicláveis</Typography>
            <Box sx={sxStyle.books}>
              <Box component="img" src={DDD} alt="Logo" sx={sxStyle.logo} />
              <Box component="img" src={DDD} alt="Logo" sx={sxStyle.logo} />
              <Box component="img" src={DDD} alt="Logo" sx={sxStyle.logo} />
            </Box>
          </CardRoot>
          <CardRoot maxWidth="18rem" flexDirection="column">
            <Typography sx={sxStyle.title}>100 - 200+ recicláveis</Typography>
            <Box sx={sxStyle.books}>
              <Box component="img" src={python} alt="Logo" sx={sxStyle.logo} />
              <Box component="img" src={python} alt="Logo" sx={sxStyle.logo} />
              <Box component="img" src={python} alt="Logo" sx={sxStyle.logo} />
            </Box>
          </CardRoot>
        </Box> */}
      </Box>
    </PageLayout>
  );
};
