import { BookInfoItem, IBook } from "./interface";

export const schools = [
  { id: 1, label: "Ari de Sá Cavalcante", value: "escola1" },
  { id: 2, label: "Farias Brito", value: "escola2" },
  { id: 3, label: "Piamarta Aguanambi", value: "escola3" },
];

export const states = [
  { id: 0, label: "Acre", value: "AC" },
  { id: 1, label: "Alagoas", value: "AL" },
  { id: 2, label: "Amapá", value: "AP" },
  { id: 3, label: "Amazonas", value: "AM" },
  { id: 4, label: "Bahia", value: "BA" },
  { id: 5, label: "Ceará", value: "CE" },
  { id: 6, label: "Distrito Federal", value: "DF" },
  { id: 7, label: "Espírito Santo", value: "ES" },
  { id: 8, label: "Goiás", value: "GO" },
  { id: 9, label: "Maranhão", value: "MA" },
  { id: 10, label: "Mato Grosso", value: "MT" },
  { id: 11, label: "Mato Grosso do Sul", value: "MS" },
  { id: 12, label: "Minas Gerais", value: "MG" },
  { id: 13, label: "Pará", value: "PA" },
  { id: 14, label: "Paraíba", value: "PB" },
  { id: 15, label: "Paraná", value: "PR" },
  { id: 16, label: "Pernambuco", value: "PE" },
  { id: 17, label: "Piauí", value: "PI" },
  { id: 18, label: "Rio de Janeiro", value: "RJ" },
  { id: 19, label: "Rio Grande do Norte", value: "RN" },
  { id: 20, label: "Rio Grande do Sul", value: "RS" },
  { id: 21, label: "Rondônia", value: "RO" },
  { id: 22, label: "Roraima", value: "RR" },
  { id: 23, label: "Santa Catarina", value: "SC" },
  { id: 24, label: "São Paulo", value: "SP" },
  { id: 25, label: "Sergipe", value: "SE" },
  { id: 26, label: "Tocantins", value: "TO" },
];

export const ranking = [
  { id: 1, city: "Fortaleza", class: "1º A", score: "2.350" },
  { id: 3, city: "Crateús", class: "2º A", score: "1.680" },
  { id: 4, city: "Russas", class: "3º A", score: "1.071" },
];

export const tHead = [
  { id: 1, name: "Cidade" },
  { id: 2, name: "Turma" },
  { id: 3, name: "Pontuação" },
];

export const bookInfo: BookInfoItem[] = [
  { id: 1, subTile: "TÍTULO", text: "{title}" },
  { id: 2, subTile: "AUTOR", text: "{author}" },
  { id: 3, subTile: "PÁGINAS", text: "{pages}" },
  { id: 4, subTile: "IDADE DE LEITURA", text: "{readingAge}" },
  {
    id: 5,
    subTile: "QTD. RECICLÁVEIS NECESSÁRIOS",
    text: "{quantityRecyclablesNeeded}",
  },
  { id: 6, subTile: "DISPONÍVEL EM", text: "{format}" },
];

export const variableMap: Record<string, keyof IBook> = {
  "{title}": "title",
  "{author}": "author",
  "{pages}": "pages",
  "{readingAge}": "readingAge",
  "{quantityRecyclablesNeeded}": "quantityRecyclablesNeeded",
  "{format}": "format",
};

export const groupBooksInThrees = (books: IBook[]) => {
  return Array.from({ length: Math.ceil(books.length / 3) }, (_, index) =>
    books.slice(index * 3, index * 3 + 3)
  );
};
