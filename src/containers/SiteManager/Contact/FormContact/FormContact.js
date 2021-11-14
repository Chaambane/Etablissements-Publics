import React from 'react';
import { Container, Form, Badge, Button } from 'react-bootstrap';
import { withFormik } from 'formik';

const formContact = (props) => {
    return (
        <Container>
            <Form className="fw-bold">
                <Form.Group className="mb-3" controlId="nom">
                    <Form.Label>Nom:</Form.Label><Badge varient="warning">5 caractère min</Badge>
                    <Form.Control 
                        type="text" 
                        placeholder="exp: Chamba...." 
                        name="nom" // On map sur les values de formik
                        onChange={props.handleChange}
                        value={props.values.nom}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="name@example.com" 
                        name="email" // On map sur les values de formik
                        onChange={props.handleChange}
                        value={props.values.email}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Message:</Form.Label><Badge varient="warning">entre 100 et 200 caractères</Badge>
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        name="message" // On map sur les values de formik
                        onChange={props.handleChange}
                        value={props.values.message}
                    />
                </Form.Group>
            </Form>
            <Button variant="primary" onClick={props.handleSubmit}>Envoyer</Button>
        </Container>
    )
};

export default withFormik({
    mapPropsToValues: () => ({
        nom: "",
        email: "",
        message: ""
    }),
    handleSubmit: (values, {props}) => {
        alert("Message envoyer !");
    }
}) (formContact);