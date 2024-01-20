import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { CardRoot } from "../../components/Card/CardRoot/CardRoot";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { sxStyle } from "./Ranking.style";
import { Search } from "lucide-react";
import { ranking } from "../../utils/constants";

export const Ranking = () => {
  return (
    <PageLayout gap="2rem">
      <CardRoot maxWidth="-webkit-fill-available" flexDirection="column">
        <Typography sx={sxStyle.title}>Filtros</Typography>
        <Box sx={sxStyle.filters}>
          <Box sx={sxStyle.col}>
            <TextField
              select
              sx={sxStyle.filter}
              label="Estado"
              variant="outlined"
            />
            <TextField
              select
              sx={sxStyle.filter}
              label="Município"
              variant="outlined"
            />
          </Box>
          <Box sx={sxStyle.col}>
            <TextField
              select
              sx={sxStyle.filter}
              label="Escola"
              variant="outlined"
            />
            <TextField
              select
              sx={sxStyle.filter}
              label="Turma"
              variant="outlined"
            />
          </Box>
        </Box>
        <Box sx={sxStyle.search}>
          <Button endIcon={<Search />} variant="contained">
            Pesquisar
          </Button>
        </Box>
      </CardRoot>

      <Box sx={sxStyle.table}>
        <TableContainer sx={sxStyle.tableContainer} component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={sxStyle.tableRow}>
                <TableCell sx={sxStyle.row}>Turma</TableCell>
                <TableCell sx={sxStyle.row} align="right">
                  Pontuação
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ranking.map((row) => (
                <TableRow
                  hover
                  key={row.class}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={sxStyle.row} component="th" scope="row">
                    {row.class}
                  </TableCell>
                  <TableCell sx={sxStyle.row} align="right" scope="row">
                    {row.score}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </PageLayout>
  );
};
