import React from 'react';
import { Container, Image } from 'react-bootstrap';
import TitleH1 from '../../../components/TitleH1/TitleH1'
import Collioure from '../../../asset/images/pOrientales.jpg'

const accueil = (props) => (
    <Container className="mt-2">
        <TitleH1>Bienvenue sur le site des pyrénnées-Orientales</TitleH1>
        <p>Le site vous aide à trouvers les adresses des établissements publics des Pyrénnées-Orientales.</p>
            <Image  src={Collioure} width="100%" alt="img-po" fluid thumbnail/>
    </Container>
);

export default accueil;