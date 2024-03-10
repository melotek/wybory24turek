import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";
import Link from "next/link";

interface IOkręgWyborczy {
    nr: number;
    zasieg: string;
    liczbaMandatow: number;
  }
  
  const okregiWyborcze: IOkręgWyborczy[] = [
    {
      nr: 1,
      zasieg: "gmina miejska Turek",
      liczbaMandatow: 6
    },
    {
      nr: 2,
      zasieg: "gmina miejsko-wiejska Tuliszków",
      liczbaMandatow: 3
    },
    {
        nr:3,
        zasieg: "gmina wiejska Turek",
        liczbaMandatow: 3
    },
    {
        nr: 4,
        zasieg:"gmina wiejska Brudzew , gmina miejsko‑wiejska Dobra , gmina wiejska Przykona , gmina wiejska Władysławów",
        liczbaMandatow: 6
    }, 
    {
        nr: 5,
        zasieg: "gmina wiejska Kawęczyn, gmina wiejska Malanów",
        liczbaMandatow: 3
    }
];

  const categoryInstrucitons = [
    "Edukacja i kultura",
    "Bezpieczeństwo i porządek publiczny",
    "Zdrowie i opieka społeczna",
    "Infrastruktura i transport",
    "Środowisko i ochrona przyrody",
    "Gospodarka i rozwój lokalny",
  ];
  

export default function CountyInstrucitons() {
  const theme = useTheme();

    const renderOkregi = () => {
        return (
            <TableContainer component={Paper}>
              <Table aria-label="Okręgi wyborcze w wyborach do Rady Powiatu">
                <TableHead>
                  <TableRow>
                    <TableCell>Nr</TableCell>
                    <TableCell align="left">Zasięg</TableCell>
                    <TableCell align="right">Liczba mandatów</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {okregiWyborcze.map((okreg) => (
                    <TableRow
                      key={okreg.nr}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">{okreg.nr}</TableCell>
                      <TableCell align="left">{okreg.zasieg}</TableCell>
                      <TableCell align="right">{okreg.liczbaMandatow}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );
    }

  return (
    <Box marginY={theme.spacing(4)}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="Okreg wyborczy"
          id="Okreg-wyborczy"
        >
          <Typography  variant="h6">Okręgi Wyborcze</Typography>
        </AccordionSummary>
        <Divider></Divider>

        <AccordionDetails>
            {renderOkregi()}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="Kategorie pytan"
          id="kategori-pytan"
        >
          <Typography variant="h6">
            Jak i dlaczego określić kategorie
          </Typography>
        </AccordionSummary>
        <Divider></Divider>
        <AccordionDetails>
          <Typography>
            Podczas zadawania pytań ważne jest, aby nadać im odpowiednią
            kategorię/rodzaj, co pomoże w lepszym zorganizowaniu dyskusji i
            umożliwi łatwiejsze odnalezienie odpowiedzi przez kandydatów.
            Kategoria pytania powinna odzwierciedlać główny temat lub obszar,
            którego dotyczy.
          </Typography>
          <Box marginTop={theme.spacing(3)}>
            <Typography>Przykładowe kategorie mogą obejmować:</Typography>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {categoryInstrucitons.map((value) => (
                <ListItem key={value} disableGutters disablePadding>
                  <ListItemText primary={`${value}`} />
                </ListItem>
              ))}
            </List>
          </Box>
          <Typography gutterBottom>
            Aby właściwie zaklasyfikować swoje pytanie, zastanów się, jaki jest
            jego główny cel lub którego aspektu dotyczącej powiatu
            dotyka. Jeśli pytanie dotyczy więcej niż jednej kategorii, wybierz
            tę, która wydaje się być najbardziej dominująca.
          </Typography>
          <Typography gutterBottom>
            Pamiętaj, że wybór kategorii nie tylko ułatwia organizację i
            przyporządkowanie pytań do odpowiednich osób, ale również może mieć
            wpływ na szybkość i trafność odpowiedzi. Dokonując wyboru, kieruj
            się nie tylko własnymi preferencjami, ale również ogólnym
            zrozumieniem tematu oraz zasadami i regulacjami prawnymi
            obowiązującymi w Twoim regionie. Dla dokładniejszego zapoznania się
            z obowiązującymi przepisami, odwiedź link do ustawy:
            <Link
              href="https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU19980910578/U/D19980578Lj.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginLeft: theme.spacing(1),
                color: theme.palette.primary.main,
              }}
            >
              Ustawa - Dz. U. 1998 Nr 91 poz. 578

            </Link>
            , która może dostarczyć więcej informacji na temat zakresu
            odpowiedzialności i działania organów samorządu terytorialnego.
          </Typography>
          <Typography gutterBottom>
            Podając kategorię pytania, wspierasz przejrzystość i efektywność
            procesu komunikacji z kandydatami, co przyczynia się do budowania
            bardziej świadomej i zaangażowanej społeczności wyborców.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
