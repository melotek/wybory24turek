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
      zasieg: "Adama Mickiewicza, Braci Pietrzaków, Działkowa, Elizy Orzeszkowej, Felicjana Sławoja Składkowskiego, Gwarna, Gorzelniana, Jana Matejki, Juliusza Słowackiego, Kaliska, Komunalna, Konińska, Krótka, Leona Lubomira Kruszyńskiego, Łagodna, Łączna, Mariana Cieplaka, Marii Konopnickiej, Miła, Miłosna, Miodowa, Młodych, Muchlińska, Nastrojowa, Ogrodowa, Owocowa, Piwna, Plac Henryka Glicensteina, Plac Zacisze, Południowa, Promienna, Przyjemna, Rajska, Sielska, Spokojna, Sportowa, Spółdzielców, Stanisława Kączkowskiego, Stefana Żeromskiego, Stylowa, Szeroka, Szkolna, Św. Floriana, Tadeusza Kościuszki, Tomiły Składkowskiej, Urocza, Warzywna, Wąska, Wesoła, Zabawna, Zgodna, Zielona",
      liczbaMandatow: 5
    },
    {
      nr: 2,
      zasieg: "3 Maja, Akacjowa, Aleja Jana Pawła II, Aleja Józefa Piłsudskiego, Braci Marszlów, Browarna, Brzozowa, Bursztynowa, Cicha, Czysta, Dębowa, Dobrska, Dobrska Szosa, Dworcowa, Feliksa Nowowiejskiego, Folwarczna, Fryderyka Chopina, Graniczna, Grażyny Bacewicz, Henryka Wieniawskiego, Ignacego Paderewskiego, Jacka Kaczmarskiego, Jacka Malczewskiego, Jaśminowa, Jęczmienna, Józefa Brandta, Józefa Chełmońskiego, J. Mehoffera, Karola Kurpińskiego, Karola Szymanowskiego, Kasztanowa, Kazimierza Serockiego, Kazimierza Sosnkowskiego, Klonowa, Kolejowa, Kolska, Kopalniana, Krzysztofa Komedy, Krzysztofa Pendereckiego, Ks. Florczaka, Kwiatowa, Leona Wyczółkowskiego, Leśna, Lniana, Lucjana Żeligowskiego, Ludomira Różyckiego, Łąkowa, Makowa, Malinowa, Marka Grechuty, Michała Kleofasa Ogińskiego, Morelowa, Niepodległości, Nowa, Oliwkowa, Orzechowa, os. Osiedle Miranda, Osiedle Uniejowskie, Parkowa, Perłowa, Piaskowa, Piękna, Piotra Michałowskiego, Plac Henryka Sienkiewicza, Plac Kilińskiego, Plac Wojska Polskiego, Poduchowne, Północna, Pszeniczna, Radosna, Różana, Rubinowa, Sezamowa, Słoneczna, Stanisława Moniuszki, Szafirowa, Tamka, Torowa, Wincentego Milewskiego, Wiśniowa, Witolda Lutosławskiego, Władysława Podkowińskiego, Władysława Żeleńskiego, Wojciecha Kossaka, Zdrojki Lewe, Zdrojki Prawe, Zdrojowa",
      liczbaMandatow: 5
    },
    {
        nr:3,
        zasieg: "650‑lecia, Adama Asnyka, Aleja NSZZ Solidarność, Aleksandra Fredry, Andrzeja Kmicica, Armii Krajowej, Bolesława Chrobrego, Bolesława Prusa, Eugeniusza Kwiatkowskiego, Franciszka Stawickiego, Gabriela Narutowicza, Generała Mieczysława Smorawińskiego, Generała Stanisława Maczka, gen. Stanisława Sosabowskiego, Generała Władysława Andersa, Górnicza, Henryka Sucharskiego, Ignacego Łukasiewicza, Inwestycyjna, Jana Kochanowskiego, Jana Skrzetuskiego, Jana Sobieskiego, Jarosława Dąbrowskiego, Jedwabnicza, Juliana Ordona, Juliana Tuwima, Kazimierza Wielkiego, Kolska Szosa, Korytkowska, Królowej Jadwigi, Legionów Polskich, Marii Dąbrowskiej, Marii Skłodowskiej‑Curie, Michała Wołodyjowskiego, Mieszka Pierwszego, Mikołaja Kopernika, pl. Plac Zawiszy Czarnego, Polskiej Organizacji Wojskowej, Przemysłowa, Racławicka, Stanisława Staszica, Stefana Czarnieckiego, Stefana Starzyńskiego, Tadeusza Kutrzeby, Uniejowska, Władysława Broniewskiego, Władysława Jagiełły, Władysława Łokietka, Władysława Reymonta, Władysława Sikorskiego, Wschodnia, Zapałczana, Żwirki i Wigury",
        liczbaMandatow: 5
    },
    {
        nr: 4,
        zasieg:"Cisowa, Emilii Plater, Grunwaldzka, Iglasta, Ignacego Daszyńskiego, Ignacego Mościckiego, Jałowcowa, Jodłowa, Kardynała Stefana Wyszyńskiego, Kazimierza Pułaskiego, Konstantego Ildefonsa Gałczyńskiego, Końcowa, Księdza Dominika Jędrzejewskiego, Macieja Rataja, mjr. Hubala, Modrzewiowa, Obrońców Westerplatte, os. Osiedle Wyzwolenia, Podchorążych, Polna, Powstańców Warszawy, Powstańców Wielkopolskich, Romualda Traugutta, Skwer Jana Pawła II, Sosnowa, Stanisława Wojciechowskiego, Świerkowa, Św. Barbary, Wincentego Witosa, Władysława Raczkiewicza",
        liczbaMandatow: 6
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
  

export default function CouncilInstrucitons() {
  const theme = useTheme();

    const renderOkregi = () => {
        return (
            <TableContainer component={Paper}>
              <Table aria-label="Okręgi wyborcze w wyborach do Rade Gminy">
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
            jego główny cel lub którego aspektu dotyczącej gminy/powiatu/miasta
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
              href="https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU19900160095/U/D19900095Lj.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginLeft: theme.spacing(1),
                color: theme.palette.primary.main,
              }}
            >
              Ustawa - Dz.U. 1990 nr 95 poz. 554
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
