import React from 'react';
import { Container, Form, Badge, Button } from 'react-bootstrap';
import { withFormik } from 'formik';
import * as Yup from 'yup';

const formContact = (props) => {
    return (
        <Container>
            <Form className="fw-bold">
                <Form.Group className="mb-3" controlId="nom">
                    <Form.Label>Nom:</Form.Label><Badge bg="warning">5 caractère min</Badge>
                    <Form.Control 
                        type="text" 
                        placeholder="exp: Chamba...." 
                        name="nom" // On map sur les values de formik
                        onChange={props.handleChange}
                        value={props.values.nom}
                        onBlur={props.handleBlur}
                    />
                    {
                        props.touched.nom && props.errors.nom &&
                        <span className="text-danger">{props.errors.nom}</span>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="name@example.com" 
                        name="email" // On map sur les values de formik
                        onChange={props.handleChange}
                        value={props.values.email}
                        onBlur={props.handleBlur} // fait un focus sur l'élèment et change la propriété touched à true
                    />
                                        {
                        props.touched.email && props.errors.email &&
                        <span className="text-danger">{props.errors.email}</span>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Message:</Form.Label><Badge bg="warning">entre 100 et 200 caractères</Badge>
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        name="message" // On map sur les values de formik
                        onChange={props.handleChange}
                        value={props.values.message}
                        onBlur={props.handleBlur}
                    />
                                        {
                        props.touched.message && props.errors.message &&
                        <span className="text-danger">{props.errors.message}</span>
                    }
                </Form.Group>
            </Form>
            <Button variant="primary" onClick={props.handleSubmit}>Envoyer</Button>
        </Container>
    )
};

export default withFormik({
    mapPropsToValues: () => ({
        nom:"",
        email:"",
        message:""
    }),
    validationSchema: Yup.object().shape({
        nom: Yup.string()
                .min(5, 'Le nom doit avoir plus de 5 caractères')
                .required("Le nom est obligatoire"),
        email: Yup.string()
                .email("Lemail n'a pas le bon format")
                .required("L'email est obligatoire"),
        message: Yup.string()
                .min(100, "Le message doit faire plus de 100 caractères")
                .max(200, "Le message doit faire moins de 200 caractères")
                .required("Le message est obligatoire")
    }),
    handleSubmit: (values, {props}) => {
        alert("Message envoyer !");
    }
}) (formContact);