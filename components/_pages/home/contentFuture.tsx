import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
type Props = {
  containerPaddingBottom?: string;
  containerPaddingTop?: string;
};

const ContentFuture = ({
  containerPaddingBottom,
  containerPaddingTop,
}: Props) => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <Container
      component="section"
      maxWidth={false}
      sx={{
        paddingBottom: containerPaddingBottom,
        paddingTop: containerPaddingTop,
        [theme.breakpoints.up("md")]: {
          paddingLeft: "0 !important",
          paddingRight: "0 !important",
        },

        background: "#ffffff",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7.5}>
            <Typography
              color="primary.main"
              component="h2"
              variant="h4"
              fontWeight={600}
              sx={{
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: theme.spacing(-1.4),
                  left: 0,
                  width: theme.spacing(6),
                  height: theme.spacing(0.4),
                  backgroundColor: theme.palette.secondary.main,
                  zIndex: 1,
                },
              }}
            >
              Masz pytania dotyczące naszej wspólnej przyszłości?
            </Typography>
            <Typography
              paragraph
              variant="body1"
              color="primary.main"
              lineHeight={theme.spacing(4)}
            >
              Zbliżają się wybory w Turku, a to oznacza, że masz niepowtarzalną
              szansę, aby aktywnie wpłynąć na przyszłość naszej społeczności.
              Już tylko 17 dni dzieli nas od kluczowego momentu, w którym każdy
              głos ma znaczenie.
            </Typography>
            <Typography
              paragraph
              variant="body1"
              color="primary.main"
              lineHeight={theme.spacing(4)}
            >
              To miejsce jest dla Ciebie! Niezależnie od tego, czy jesteś
              zaniepokojony aktualnymi wydarzeniami, czy masz pomysły na poprawę
              życia w naszej społeczności, Twoje pytania i opinie mogą zaważyć
              na debacie wyborczej.
            </Typography>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              onClick={() => router.push("/lista-pytan")}
            >
              Zobacz pytania i zagłosuj
            </Button>
          </Grid>

          <Grid item xs={0} md={4.5}>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                width: theme.spacing(50),
                height: theme.spacing(40),
                [theme.breakpoints.down("md")]: {
                  display: "none",
                },

                "&::before": {
                  content: "''",
                  position: "absolute",
                  top: theme.spacing(0),
                  right: theme.spacing(0),
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: "100%",
                  height: "100%",

                  backgroundImage: "url(/images/herbWatermark.png)",
                },
              }}
            ></Box>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default ContentFuture;
