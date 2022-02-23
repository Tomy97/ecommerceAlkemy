import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Container, Row } from 'react-bootstrap'
const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <Container>
        <Row>{children}</Row>
      </Container>
      <Footer />
    </>
  )
}

export default Layout
