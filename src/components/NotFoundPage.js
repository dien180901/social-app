import React from 'react'
import {Container,Row,Col}from "react-bootstrap"

const NotFoundPage = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1> 404 , Not Found!</h1>
                    <p> Sorry, the page you're looking for does not exist</p>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFoundPage
