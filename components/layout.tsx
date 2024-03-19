import { Container, useTheme, Box } from "@mui/material";
import Footer from "./footer/footer.component";
import Navbar from "./navbar/navbar.component";

export default function Layout({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  return (
    <>
      <Navbar />
      <main>
        <Box sx={{ padding: "0px !important" }}>{children}</Box>
      </main>
      <Footer />
    </>
  );
}
