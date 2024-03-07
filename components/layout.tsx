import Footer from './footer/footer.component'
import Navbar from './navbar/navbar.component'
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}