import './App.css';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap'
import {
  BrowserRouter,
  Routes,
  Route,
  Link} 
from "react-router-dom";
import { Nosotros } from './components/nosotros';
import { Contacto } from './components/contacto';
import {Home} from './components/home';
import {Cart} from './components/cart';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Navbar bg="dark" variant='dark' expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">ANIME STORE DIGIO</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
              <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
              <Nav.Link as={Link} to="/cart">Carrito🛒</Nav.Link>
             
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="buscar"
                placeholder="Buscar"
                className="me-2"
                aria-label="Buscar"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

    <div>
      <Routes>

      <Route path="/nosotros" element={<Nosotros/>}/>
      <Route path="/contacto" element={<Contacto/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>

      </Routes>

    </div>

    </BrowserRouter>
  );
}

export default App;
