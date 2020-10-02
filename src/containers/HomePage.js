import React from 'react'
import {Container,Row,Col}from "react-bootstrap"
import {useSelector,useDispatch} from "react-redux"
const HomePage = () => {
    // const blogs=useSelector(state=>state.blog.blogs)
    // const loading=useSelector ((state)=>state.blog.loading);
    // const dispatch=useDispatch();
    return (
        <Container>
            <Row>
                <Col>
                    <h1> Home Page</h1>
                    
                    <p> Welcome home-</p>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage
