import staticImage from "@/public/images/home-header.jpg";
import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import TimeCounter from "./timeCounter";
type Props = {};

const ContentHeader = (props: Props) => {
  const router = useRouter();
  const theme = useTheme();

  const ref = useRef<HTMLImageElement | null>(null);
  return (
    <div
      style={{
        position: "static",
        // width: `100vw`,
        // height: `100vh`,
      }}
    >
      <Image
        // layout="fill"
        ref={ref}
        sizes="100vw"
        style={{
          width: "100%",
          height: "100%",
          // layout: "fill",
          objectFit: "cover",
          position: "absolute",
          objectPosition: "center top",
        }}
        src={staticImage}
        alt="Kobieta kandydat do organu samorządowe odpowiada na pytania, podczas publicznej debaty"
      />
      <Container
        sx={{
          display: "block",
          position: "relative",
          height: "100vh",
        }}
        component="header"
      >
        <Box
          sx={{
            color: theme.palette.text.secondary,
            position: "absolute",
            top: theme.spacing(35),
          }}
        >
          <Box
            p={theme.spacing(2)}
            sx={{ background: "rgba(17, 24, 99, 0.38)" }}
          >
            <Typography component="h2" variant="h4">
              Dołącz do Debaty Wyborczej w Naszej Społeczności!
            </Typography>
            <Typography paragraph variant="body2">
              Działaj – pytaj, oceniaj, wybieraj najważniejsze tematy.
            </Typography>
          </Box>
          <Button
            onClick={() => router.push("/zadaj-pytanie/wybory-burmistrz")}
            variant="contained"
            size="large"
            sx={{ margin: theme.spacing(2, 0) }}
            color="secondary"
          >
            Bądź wymagający, zadaj pytanie
          </Button>

          <Box>
            <TimeCounter />
          </Box>
          <Typography>
            Nasza wspólna praca ma sens tylko, jeżeli twoje głosy wylądują w
            urnie wyborczej
          </Typography>
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
    </div>
  );
};

export default ContentHeader;
