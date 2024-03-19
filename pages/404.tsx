import Link from "@/components/shared/linkCore.composed";
import { Face, Facebook } from "@mui/icons-material";
import { Container } from "@mui/material";

export default function Custom404() {
  return (
    <Container
      sx={{
        minHeight: "100vh",
        placeItems: "center",
        placeContent: "center",
        placeSelf: "center",
        display: "grid",
      }}
    >
      <h1>Strona w budowie</h1>
      <p>
        Jeżeli chcesz dołoączyć do naszego teamu, napisz wiadomość, komunikujemy
        się pod adresem:
        <Link
          target="_blank"
          referrerPolicy="no-referrer"
          href="https://www.facebook.com/wybory24turek"
        >
          <Facebook />
        </Link>
      </p>
    </Container>
  );
}
