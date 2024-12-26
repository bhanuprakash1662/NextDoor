import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FilterComponent from './filter';

function Navbar1() {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-primary" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Container>
          {/* Uncomment if a brand/logo is needed */}
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <NavDropdown title="Hyderabad" id="hyderabad-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Gachibowli</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Kukatpally</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Secunderabad</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Other Locations</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Mumbai" id="mumbai-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Mumbai</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Bangalore" id="bangalore-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Bangalore</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Delhi" id="delhi-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Delhi</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Chennai" id="chennai-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Chennai</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Price" id="price-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">0 - 500</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">500 - 1000</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Above 1000</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>

              {/* Filter Toggle Button */}
              <button
                onClick={toggleFilters}
                className="btn btn-primary"
                style={{
                  marginLeft: '10px',
                  alignSelf: 'center',
                }}
              >
                {showFilters ? 'Close Filters' : 'Show Filters'}
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>

        {/* Filter Component */}
        {showFilters && (
          <div
            className="filter-options bg-light border rounded"
            style={{
              position: 'absolute',
              top: '40px',
              right: '8px',
              zIndex: 1000,
              padding: '10px',
              width: '200px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <FilterComponent />
          </div>
        )}
      </Navbar>
    </div>
  );
}

export default Navbar1;
