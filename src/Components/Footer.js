import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <>
          <footer>
            <Container>
                <Row>
                    <Col className="footer">
                  <strong>  copyright &copy; 2021@</strong>
                    </Col>
                </Row>
            </Container>
            
        </footer>   
        </>
    )
}

export default Footer
