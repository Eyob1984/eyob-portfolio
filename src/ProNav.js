import React from 'react'
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'
import Pdf from './asset/image/resume.docx.pdf'

export default function PortfolioNav() {
  return (
    <div>
       <Nav className="justify-content-end bg-dark " activeKey="/home">
        <Nav.Item>
          <Nav.Link className='btn btn-outline-light btn-floating m-1' href="/home"> <i class="bi bi-house"></i> </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='btn btn-outline-light btn-floating m-1' >Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='btn btn-outline-light btn-floating m-1' target="_blank" href={Pdf} eventKey="link-1">Resume</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='btn btn-outline-light btn-floating m-1' eventKey="link-2">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
      
    </div>
  )
}
