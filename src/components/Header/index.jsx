import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import style from "./style.module.css"
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Header() {

const [count, setCount] = useState(0);

function handleClick(){
    setCount(count+1);
    console.log(count);
}


  return (
    <Navbar className={style['navbar']} expand="lg">
      <Container className={style['container']}>
        <Navbar.Brand href="#home" className={style['text']}>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         <Nav className='me-auto'>
            <NavDropdown className='bg-primary' title="Program" id="basic-nav-dropdown" style={{color: 'white'}} >
              <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='bg-primary' title="Bidang Ilmu" id="basic-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home" className={style['text']}>About</Nav.Link>
          </Nav>
        <Button className={style['button-text']} onClick={handleClick}>Masuk/Daftar</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;