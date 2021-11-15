import React from 'react';
import { Card, Button } from 'react-bootstrap';

const localisationCard = (props) => (
    <Card className="mt-2">
        <Card.Header className="text-center">{props.nom}</Card.Header>
        <Card.Body>
            <Card.Title>Tel: {props.tel}</Card.Title>
            <Card.Text>{props.email && `Email : ${props.email}`}</Card.Text>
            <div className="fw-bold">Adresse:</div>
            <div>{props.adresseNom}</div>
            <p>{props.adresseCd} - {props.adresseCommune}</p>
            <div className="fw-bold">Horaires :</div>
            <div>Du {props.ouverture} au {props.fermeture}</div>
            <div>De {props.horairesM.de} à {props.horairesM.a}</div>
            <Button href={props.site} target="_blank">Visitez le site web</Button>
        </Card.Body>
    </Card>
);

export default localisationCard;