import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Navbar1 from './Navbar1';




function NavbarComp() {
  return (
    <div>
<Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">NextDoor</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
         <button style={{borderColor:"white"}}>SIGNIN</button><span></span>
         <button style={{borderColor:"white"}}>LOGIN</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   <Navbar1/>

    </div>
    

  );
}

export default NavbarComp;