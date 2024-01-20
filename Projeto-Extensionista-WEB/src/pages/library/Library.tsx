import { Box, Typography } from "@mui/material";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { sxStyle } from "./Library.style";
import cleanCode from "../../assets/clean-code.png";
import DDD from "../../assets/DDD.jpg";
import understandingAlgorithms from "../../assets/entendendo_algoritmos.png";
import python from "../../assets/python.jpg";
import { CardRoot } from "../../components/Card/CardRoot/CardRoot";
import { useNavigate } from "react-router-dom";

export const Library = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <Box sx={sxStyle.boxMain}>
        <Box sx={sxStyle.container}>
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
        </Box>
      </Box>
    </PageLayout>
  );
};
