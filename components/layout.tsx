import { Container, useTheme } from '@mui/material'
import Footer from './footer/footer.component'
import Navbar from './navbar/navbar.component'
 
export default function Layout({ children }: { children: React.ReactNode }) {
  const theme = useTheme()
  return (
    <>
      <Navbar />
      <main>
        <Container sx={{        marginTop: theme.spacing(22),
}}>

        {children}
        </Container>
        </main>
      <Footer />
    </>
  )
}