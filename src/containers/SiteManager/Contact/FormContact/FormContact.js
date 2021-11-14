import React from 'react';
import { Container, Form, Badge, Button } from 'react-bootstrap';

const formContact = (props) => {
    return (
        <Container>
            <Form className="fw-bold">
                <Form.Group className="mb-3" controlId="nom">
                    <Form.Label>Nom:</Form.Label><Badge varient="warning">5 caractère min</Badge>
                    <Form.Control type="text" placeholder="exp: Chamba...." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Message:</Form.Label><Badge varient="warning">entre 100 et 200 caractères</Badge>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
            <Button variant="primary" type="submit">Envoyer</Button>
        </Container>
    )
};

export default formContact;