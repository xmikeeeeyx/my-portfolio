import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import fb from '../icons/facebook-app-symbol.png'
import ig from '../icons/instagram.png'
import linkedin from '../icons/linkedin.png'

function BasicExample() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        const onScroll = () =>{
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onscroll);

        return () => window.removeEventListener("scroll", onscroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    } 

  return (
    <Navbar className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">Mike</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink == 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink == 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink == 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a><img src={fb}></img></a>
                <a><img src={ig}></img></a>
                <a><img src={linkedin}></img></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;