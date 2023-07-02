import React from 'react'
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'


export default function PortfolioNav() {
  return (
    <div>
       <Nav className="justify-content-end bg-dark text-danger " activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Resume</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
      
    </div>
  )
}
