import { Container, Nav, Navbar } from 'react-bootstrap'
import { useState } from 'react'

const Header = () => {
  const [isLogin] = useState<Boolean>(true)
  return (
    <Navbar bg="dark" expand="lg" sticky='top' >
      <Container>
        <Navbar.Brand className='text-white' >Testing Navbar</Navbar.Brand>
        <Navbar.Toggle style={{ borderColor: '#fff' }} />
        <Navbar.Collapse>
          <Nav className="me-auto" >
            {isLogin ?  <Nav.Link href="/login" className='text-white' >Login</Nav.Link>  : <span className='text-white' > Se logueo correctamente </span> }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header
