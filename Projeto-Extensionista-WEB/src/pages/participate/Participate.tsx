import { Box, Typography } from "@mui/material";
import { PageLayout } from "../../components/PageLayout/PageLayout";

export const Participate = () => {
  return (
    <PageLayout>
      <Box className="box-main">
        <Box className="content-container">
          <Typography variant="h4" className="content-title">
            Como participar?
          </Typography>
          <br />
          <Typography variant="body1" className="content-text">
            <strong>1º -</strong> Faça seu cadastro, não esqueça de informar
            seus dados corretamente e chame um adulto para auxiliar;
          </Typography>
          <br />
          <Typography variant="body1" className="content-text">
            <strong>2º -</strong> Após terminar o cadastro e efetuar o login, é
            hora de escolher um livro na biblioteca online de acordo com a
            quantidade de itens recicláveis que você juntou/ irá juntar;
          </Typography>
          <br />
          <Typography variant="body1" className="content-text">
            <strong>3º -</strong> Já juntou todos eles? Ótimo, agora você só
            precisa levar os itens até a escola e fazer a troca informando seus
            dados na secretaria.
          </Typography>
          <br />
          <Typography variant="body2" className="reminder-text">
            Lembre-se sempre de verificar o ranking da sua turma e participar
            mais vezes para concorrer a uma viagem com seus colegas!
          </Typography>
        </Box>
      </Box>
    </PageLayout>
  );
};
