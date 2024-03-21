import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import ContentCard from "./contentCard";
import ContentFuture from "./contentFuture";
import ContentHeader from "./contentHeader";
const targetDate = Date.parse("Apr 07, 2024, 07");

const HomeContent = () => {
  const router = useRouter();

  const ref = useRef<HTMLImageElement | null>(null);
  const theme = useTheme();

  return (
    <>
      <ContentHeader />
      <ContentFuture
        containerPaddingTop={theme.spacing(10)}
        containerPaddingBottom={theme.spacing(10)}
      />

      <Container component="section">
        {/* <Typography component="h2" variant="h5" gutterBottom>
          Dlaczego warto zadawać pytania?
        </Typography> */}
        <Box
          sx={{
            [theme.breakpoints.up("md")]: {
              marginBottom: theme.spacing(10),
              marginTop: theme.spacing(10),
            },
            [theme.breakpoints.down("md")]: {
              marginBottom: theme.spacing(5),
              marginTop: theme.spacing(5),
            },
          }}
        >
          <Typography component="h2" variant="h4">
            Dlaczego Twoje Zaangażowanie Ma Znaczenie?
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <ContentCard>
              <Typography component="h3" variant="h5" gutterBottom>
                Twoje pytania zmieniają debatę!
              </Typography>
              <Image
                src="/images/interpretations.svg"
                priority
                width={240}
                height={240}
                alt="zadaj pytanie"
              />
              <Typography
                paragraph
                variant="body2"
                lineHeight={theme.spacing(3)}
              >
                Wykorzystaj swoją szansę, by wpłynąć na kształt wyborczej
                dyskusji w Turku. Zadaj pytanie, które leży Ci na sercu, i dodaj
                do niego swoją sygnaturę. To nie tylko sposób na wyrażenie tego,
                co dla Ciebie ważne, ale też na pokazanie, że stoisz za swoimi
                słowami. Niezależnie od tematu, Twoje pytanie może stać się
                częścią większej debaty, kształtującej naszą przyszłość. Zadaj
                pytanie już dziś i bądź autorem zmiany!
              </Typography>
            </ContentCard>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <ContentCard>
              <Typography component="h3" variant="h5" gutterBottom>
                Twój głos liczy się!
              </Typography>
              <Image
                src="/images/intepretations-icon.svg"
                width={240}
                height={240}
                alt="zadaj pytanie"
              />
              <Typography
                paragraph
                variant="body2"
                lineHeight={theme.spacing(3)}
              >
                Teraz, gdy zgłoszone pytania czekają na Twoją ocenę, masz
                unikalną okazję, by wpłynąć na wybór tematów, które zostaną
                poruszone podczas debaty wyborczej. Głosowanie na najlepsze
                pytania to kluczowy moment, w którym wspólnie decydujemy o
                priorytetach naszej społeczności. Wybierz pytania, które według
                Ciebie zasługują na uwagę i pomóż nam wyłonić te
                najistotniejsze. Oddaj głos na pytania, które zmienią Turku –
                Twoje zdanie ma moc!
              </Typography>
            </ContentCard>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <ContentCard>
              <Typography component="h3" variant="h5" gutterBottom>
                Podziel się swoim głosem!
              </Typography>
              <Image
                src="/images/intepretations-icon.svg"
                width={240}
                height={240}
                alt="zadaj pytanie"
              />
              <Typography
                paragraph
                variant="body2"
                lineHeight={theme.spacing(3)}
              >
                Drogi Kandydacie, zachęcamy Cię do bezpośredniego dialogu z
                wyborcami poprzez wysyłanie własnych wiadomości głosowych.
                Odpowiadając głosem na pytania społeczności, możesz nie tylko
                dokładniej przedstawić swoje stanowisko, ale także zbudować
                silniejszą, osobistą więź z mieszkańcami. To Twoja szansa, aby
                wyróżnić się i pokazać zaangażowanie w dialog z wyborcami. Niech
                Twój głos będzie słyszalny!
              </Typography>
            </ContentCard>
          </Grid>
        </Grid>
      </Container>
      {/* 
      <Container component="section">
        <Typography component="h2" variant="h5" gutterBottom>
          Zachęcamy do podpisywania się imieniem i nazwiskiem
        </Typography>
        <Typography paragraph variant="body2">
          Podpisując się pod swoim pytaniem, przyczyniasz się do budowy
          przejrzystej i otwartej debaty. Pokazujesz, że stoisz za swoimi
          słowami, co zwiększa ich wartość i znaczenie.
        </Typography>
        <Typography component="h3" variant="h6" gutterBottom>
          Nie bój się swoich pytań, bądź z nich dumny
        </Typography>
        <Typography paragraph variant="body2">
          Twoje pytania mogą ujawnić perspektywy, które inni mogą przeoczyć.
          Bycie sygnatariuszem swojego zapytania to dowód odwagi i zaangażowania
          w dobro wspólne.
        </Typography>
      </Container> */}

      {/* <Container component="section">
        <Typography component="h2" variant="h5" gutterBottom>
          Weź udział w kształtowaniu naszej wspólnej przyszłości
        </Typography>
        <Typography paragraph variant="body2">
          Masz unikalną okazję, aby Twoje pytania zostały usłyszane. Nie przegap
          szansy na bezpośredni wpływ na kierunek, w jakim podąża nasza
          społeczność.
        </Typography>
        <Typography component="em" variant="h6" gutterBottom>
          Wypełnij ankietę już dziś!
        </Typography>
      </Container> */}
      {/* <Container component="section">
        <Typography paragraph variant="body2">
          W ostatnim tygodniu przed wyborami planujemy zorganizować debatę Q&A,
          która da Wam, drodzy mieszkańcy, niepowtarzalną okazję do zadania
          pytań kandydatom. Naszym celem jest stworzenie platformy otwartej na
          merytoryczną dyskusję, która pozwoli lepiej poznać stanowiska
          kandydatów w kluczowych dla naszej społeczności kwestiach.
        </Typography>
        <Typography paragraph variant="body2">
          Aby debata mogła się odbyć, potrzebujemy Waszego wsparcia! Zachęcamy
          do aktywnego uczestnictwa w tej przedwyborczej inicjatywie poprzez
          zadawanie pytań. Naszym celem jest zebranie co najmniej 500 pytań od
          mieszkańców. Dodatkowo, aby pokazać, jak ważna jest dla nas wszystkich
          ta debata, chcielibyśmy również zobaczyć 1000 polubień na naszej
          stronie na Facebooku.
        </Typography>
        <Typography paragraph variant="body2">
          Jeśli wspólnie osiągniemy te cele, nie tylko zorganizujemy debatę Q&A,
          ale również spotkanie organizacyjne, w którym będą mogli uczestniczyć
          wszyscy zainteresowani. To spotkanie będzie doskonałą okazją do
          bezpośredniego dialogu, wymiany opinii i wspólnego dążenia do lepszego
          jutra naszej społeczności.
        </Typography>

        <Typography component="h2" variant="h5" gutterBottom>
          Jak możesz pomóc?
        </Typography>
        <List>
          <ListItem>
            Zadaj pytanie: Jeśli nurtuje Cię konkretna kwestia lub po prostu
            chcesz lepiej poznać plany kandydatów – nie wahaj się. Każde pytanie
            przybliża nas do celu!
          </ListItem>

          <ListItem>
            Polub i udostępnij naszą stronę na Facebooku: Pokaż swoje wsparcie i
            pomóż nam dotrzeć do większej liczby mieszkańców.
          </ListItem>

          <ListItem>
            Bądź częścią tej zmiany To wyjątkowa okazja, by Twoje pytania i głos
            miały realny wpływ na przyszłość naszej społeczności. Pamiętaj,
            razem możemy więcej – dołącz do nas i bądź częścią tej ważnej
            debaty!
          </ListItem>
        </List>
      </Container> */}
    </>
  );
};

export default HomeContent;
