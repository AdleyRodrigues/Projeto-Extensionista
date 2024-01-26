import { Box, Typography } from "@mui/material";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { Img } from "react-image";

export const About = () => {
  return (
    <PageLayout>
      <Box className="box-main">
        <Box className="content-container">
          <Typography variant="h4" className="content-title">
            <h2>Projeto RecicLEIA</h2>
          </Typography>
          <br />
          <Typography variant="body1" className="content-text">
            <h2>Apoio:</h2>
            </Typography>
            <Box component="img" src="src/assets/logo-uninter.png" alt="Logo Centro universitário Uninter" width="20%"/>
        
            
          <br />
          <Typography variant="h4" className="content-text">
            <strong>Criadores:</strong>
            </Typography>
            
            <Typography variant="body1" className="content-text">
            
            Adley Rodrigues
            <br />
            Maysa Flores Cardoso 
            <br />
            Elias José Galeazzi
           
            </Typography>
          <br />
          <Typography variant="h4" className="content-text">
            <strong>
              Dúvidas? 
              <br />
              </strong>
              </Typography>
              <Typography variant="body1" className="content-text">
            
              Contate sua escola ou nos envie um email:
              recicleia@sac.com.br 
            
          </Typography>
        </Box>
      </Box>
    </PageLayout>
  );
};
