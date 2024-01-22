import {
  Box,
  Button,
  MenuItem,
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
import { ranking, schools, tHead } from "../../utils/constants";
import { useState } from "react";
import { IFilterData } from "../../utils/interface";
import { FilterDataProps } from "../../utils/types";
import { getFilterById } from "../../services/api";

export const Ranking = () => {
  const [filter, setFilter] = useState<IFilterData>({
    id: 0,
    city: "",
    school: "",
    class: "",
  });

  const handleInputChange = (key: FilterDataProps, value: string) => {
    setFilter({ ...filter, [key]: value });
  };

  const handleTextFieldChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const { name, value } = event.target;
    handleInputChange(name as FilterDataProps, value);
  };

  const onFilter = () => {
    getFilterById(filter)
      .then((ranking) => setFilter(ranking))
      .catch((error) => console.error(error));

    console.log(ranking);
  };

  return (
    <PageLayout gap="2rem">
      <Typography sx={sxStyle.pageTitle}>Ranking</Typography>
      <CardRoot maxWidth="-webkit-fill-available" flexDirection="column">
        <Typography sx={sxStyle.title}>Filtros</Typography>
        <Box sx={sxStyle.filters}>
          <TextField
            name="city"
            label="Município"
            variant="outlined"
            value={filter.city || ""}
            sx={sxStyle.filter}
            onChange={handleTextFieldChange}
          />
          <TextField
            name="school"
            label="Escola"
            variant="outlined"
            value={filter.school || ""}
            sx={sxStyle.filter}
            onChange={handleTextFieldChange}
            select
          >
            {schools.map((school) => (
              <MenuItem key={school.id} value={school.value}>
                {school.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            name="class"
            label="Turma"
            variant="outlined"
            value={filter.class || ""}
            sx={sxStyle.filter}
            onChange={handleTextFieldChange}
            select
          >
            {ranking.map((ranking) => (
              <MenuItem key={ranking.id} value={ranking.class}>
                {ranking.class}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box sx={sxStyle.search}>
          <Button endIcon={<Search />} variant="contained" onClick={onFilter}>
            Pesquisar
          </Button>
        </Box>
      </CardRoot>

      <Box sx={sxStyle.table}>
        <TableContainer sx={sxStyle.tableContainer} component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={sxStyle.tableRow}>
                {tHead.map((headCell) => (
                  <TableCell key={headCell.id} sx={sxStyle.row}>
                    {headCell.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {ranking.map((filtered) => (
                <TableRow key={filtered.id}>
                  <TableCell>{filtered.city}</TableCell>
                  <TableCell>{filtered.class}</TableCell>
                  <TableCell>{filtered.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </PageLayout>
  );
};
