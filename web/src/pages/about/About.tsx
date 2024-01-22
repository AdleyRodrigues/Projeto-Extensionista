import { Box, Typography } from "@mui/material";
import { PageLayout } from "../../components/PageLayout/PageLayout";

export const About = () => {
  return (
    <PageLayout>
      <Box className="box-main">
        <Box className="content-container">
          <Typography variant="h4" className="content-title">
            Projeto RecicLEIA
          </Typography>
          <br />
          <Typography variant="body1" className="content-text">
            <strong>Apoios -</strong>
            <br />
            ---
          </Typography>
          <br />
          <Typography variant="body1" className="content-text">
            <strong>Criadores -</strong>
            <br />
            --- Elias José Galeazzi Maysa Flores Cardoso Adley Rodrigues
          </Typography>
          <br />
          <Typography variant="body1" className="content-text">
            <strong>
              Dúvidas? Contate sua escola ou nos envie um email:
              recicleia@sac.com.br -
            </strong>
          </Typography>
        </Box>
      </Box>
    </PageLayout>
  );
};
