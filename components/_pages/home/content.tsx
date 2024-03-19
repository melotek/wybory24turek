"use client";
import {
  Box,
  List,
  ListItem,
  Typography,
  useTheme,
  Button,
  Grid,
  Container,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Countdown, { calcTimeDelta, formatTimeDelta } from "react-countdown";
import Image from "next/image";
import Link from "@/components/shared/linkCore.composed";
import { useRouter } from "next/router";
import ContentCard from "./contentCard";
type Props = {};
const targetDate = Date.parse("Apr 07, 2024, 07");

const HomeContent = (props: Props) => {
  const router = useRouter();

  const ref = useRef<HTMLImageElement | null>(null);
  const theme = useTheme();
  const [loaded, isloaded] = useState(false);
  useEffect(() => {
    isloaded(true);
  }, []);
  const renderer = ({ days, hours, minutes, seconds }: any) => {
    return (
      <Box display="flex" flexDirection="column">
        <Typography paragraph variant="body2" mb={0}>
          Do wyborów pozostało:
        </Typography>
        <Box display="flex" flexDirection="row">
          <Typography paragraph variant="body2" marginRight={theme.spacing(1)}>
            {days} dni{" "}
          </Typography>
          <Typography paragraph variant="body2">
            {hours}:
          </Typography>
          <Typography paragraph variant="body2">
            {minutes}:
          </Typography>
          <Typography paragraph variant="body2">
            {seconds}
          </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <>
      <Container
        sx={{
          display: "block",
          height: "100vh",
        }}
        component="header"
      >
        <Image
          fill
          ref={ref}
          sizes="100vw"
          style={{
            position: "absolute",
            objectFit: "cover",
            objectPosition: "center top",

            marginLeft: 0,
            marginRight: 0, // zIndex: 1,
            top: 0,
            left: 0,
            right: 0,
          }}
          src="/images/home-header.jpg"
          alt="Kobieta kandydat do organu samorządowe odpowiada na pytania, podczas publicznej debaty"
        />

        <Box
          sx={{
            color: theme.palette.text.secondary,
            position: "absolute",
            top: "40vh",
          }}
        >
          <Box
            p={theme.spacing(2)}
            sx={{ background: "rgba(17, 24, 99, 0.38)" }}
          >
            <Typography component="h2" variant="h4" gutterBottom>
              Masz pytania dotyczące naszej społeczności?
            </Typography>
            <Typography paragraph variant="body2">
              Jeśli jesteś mieszkańcem i masz pytania, które mogą wpłynąć na
              naszą przyszłość, to jest to miejsce dla Ciebie!
            </Typography>
          </Box>
          <Button
            onClick={() => router.push("/zadaj-pytanie/pytania-burmistrz")}
            variant="contained"
            sx={{ margin: theme.spacing(2, 0) }}
            color="secondary"
          >
            Bądź wymagający, zadaj pytanie
          </Button>

          <Box>
            {!loaded ? null : (
              <Countdown date={targetDate} renderer={renderer} />
            )}
          </Box>
        </Box>
        <Typography
          sx={{
            position: "absolute",
            bottom: theme.spacing(1),
            right: theme.spacing(1),
          }}
          variant="caption"
        >
          https://www.freepik.com
        </Typography>
      </Container>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: "''",
            position: "absolute",
            top: theme.spacing(0),
            right: theme.spacing(0),
            zIndex: "-20",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: theme.spacing(40),
            height: theme.spacing(40),
            backgroundImage: "url(/images/herbWatermark.png)",
          },
        }}
      >
        <Container component="section">
          {/* <Typography component="h2" variant="h5" gutterBottom>
          Dlaczego warto zadawać pytania?
        </Typography> */}

          <Typography
            component="h2"
            variant="h4"
            sx={{
              marginBottom: theme.spacing(15),
              marginTop: theme.spacing(15),
            }}
          >
            Teraz masz bezpośredni wkład w debatę wyborczą.
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <ContentCard>
                <Typography component="h3" variant="h6" gutterBottom>
                  Twój głos w debacie ma znaczenie
                </Typography>
                <Typography paragraph>
                  Zadając pytania, aktywnie wpływasz na debatę publiczną i
                  decyzje ważne dla naszej społeczności.
                </Typography>
              </ContentCard>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <ContentCard>
                <Typography component="h3" variant="h6" gutterBottom>
                  Archiwizacja dla przyszłości
                </Typography>
                <Typography paragraph>
                  Odpowiedzi zostaną zarchiwizowane i będą dostępne online aż do
                  kolejnych wyborów, zapewniając transparentność i ciągłość
                  dialogu.
                </Typography>
              </ContentCard>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <ContentCard>
                <Typography component="h3" variant="h6" gutterBottom>
                  Budowanie fundamentu dla debaty
                </Typography>
                <Typography paragraph>
                  Zbierając merytoryczne pytania, przygotowujemy solidną
                  podstawę dla sensownej debaty, w której każdy mieszkaniec ma
                  bezpośredni głos.
                </Typography>
              </ContentCard>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container component="section">
        <Typography component="h2" variant="h5" gutterBottom>
          Zachęcamy do podpisywania się imieniem i nazwiskiem
        </Typography>
        <Typography paragraph>
          Podpisując się pod swoim pytaniem, przyczyniasz się do budowy
          przejrzystej i otwartej debaty. Pokazujesz, że stoisz za swoimi
          słowami, co zwiększa ich wartość i znaczenie.
        </Typography>
        <Typography component="h3" variant="h6" gutterBottom>
          Nie bój się swoich pytań, bądź z nich dumny
        </Typography>
        <Typography paragraph>
          Twoje pytania mogą ujawnić perspektywy, które inni mogą przeoczyć.
          Bycie sygnatariuszem swojego zapytania to dowód odwagi i zaangażowania
          w dobro wspólne.
        </Typography>
      </Container>

      <Container component="section">
        <Typography component="h2" variant="h5" gutterBottom>
          Weź udział w kształtowaniu naszej wspólnej przyszłości
        </Typography>
        <Typography paragraph>
          Masz unikalną okazję, aby Twoje pytania zostały usłyszane. Nie przegap
          szansy na bezpośredni wpływ na kierunek, w jakim podąża nasza
          społeczność.
        </Typography>
        <Typography component="em" variant="h6" gutterBottom>
          Wypełnij ankietę już dziś!
        </Typography>
      </Container>
      <Container component="section">
        <Typography paragraph>
          W ostatnim tygodniu przed wyborami planujemy zorganizować debatę Q&A,
          która da Wam, drodzy mieszkańcy, niepowtarzalną okazję do zadania
          pytań kandydatom. Naszym celem jest stworzenie platformy otwartej na
          merytoryczną dyskusję, która pozwoli lepiej poznać stanowiska
          kandydatów w kluczowych dla naszej społeczności kwestiach.
        </Typography>
        <Typography paragraph>
          Aby debata mogła się odbyć, potrzebujemy Waszego wsparcia! Zachęcamy
          do aktywnego uczestnictwa w tej przedwyborczej inicjatywie poprzez
          zadawanie pytań. Naszym celem jest zebranie co najmniej 500 pytań od
          mieszkańców. Dodatkowo, aby pokazać, jak ważna jest dla nas wszystkich
          ta debata, chcielibyśmy również zobaczyć 1000 polubień na naszej
          stronie na Facebooku.
        </Typography>
        <Typography paragraph>
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
      </Container>
    </>
  );
};

export default HomeContent;
