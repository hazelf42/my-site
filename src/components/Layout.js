import React from 'react'
import {Container} from 'react-bootstrap'
// Todo: This is a bad way to impor

export const Layout = (props) => (
    <Container>
        {props.children}
    </Container>
)