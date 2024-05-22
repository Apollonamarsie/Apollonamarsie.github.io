import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useHistory } from 'react-router-dom';

function NavBar() {

  const history = useHistory();

  const navigate = (e: any) => {
    console.log(e.target.id);
    history.push(e.target.id);
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand id="/" onClick={navigate} style={{ cursor: "pointer" }}>Polska Agencja Kosmiczna</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{background: "#666"}} id="/" onClick={navigate}>Strona główna</Nav.Link>
            <Nav.Link style={{background: "#666"}} id="/statystyki" onClick={navigate}>Statystyki</Nav.Link>
            <Nav.Link id="/kolonizacja" onClick={navigate}>Kolonizacja marsa</Nav.Link>
            <Nav.Link style={{background: "#666"}} id="/konwerter" onClick={navigate}>Konwerter</Nav.Link>
            <Nav.Link style={{background: "#666"}} id="/planety" onClick={navigate}>Planety</Nav.Link>
            <Nav.Link style={{background: "#666"}} id="/ksiezyce" onClick={navigate}>Księżyce</Nav.Link>
            <Nav.Link style={{background: "#666"}} id="/galeria" onClick={navigate}>Kosmiczna galeria</Nav.Link>
            <Nav.Link style={{background: "#666"}} id="/symulacja" onClick={navigate}>Symulacja</Nav.Link>
            <Nav.Link id="/formularz" onClick={navigate}>Dołącz do nas</Nav.Link>
            <Nav.Link id="/info" onClick={navigate}>O stronie</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;