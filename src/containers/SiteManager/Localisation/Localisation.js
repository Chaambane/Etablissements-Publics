import React, {Component} from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import TitleH1 from '../../../components/TitleH1/TitleH1';
import LocalisationCard from './LocalisationCard/LocalisationCard';

class Localisation extends Component {
    state= {
        dataInstitution: null,
    }

    //Load data
    handleLoadingData = (institution) => {
        axios.get(`https://etablissements-publics.api.gouv.fr/v3/departements/66/${institution}`)
        .then(response => {
            console.log(response);
            const dataInstitution = response.data.features.map(item => {
                return{
                    id:item.properties.id,
                    nom: item.properties.nom,
                    tel: item.properties.telephone,
                    email: item.properties.email,
                    adresseNom: item.properties.adresses[0].lignes[0],
                    adresseCommune: item.properties.adresses[0].commune,
                    adresseCd: item.properties.adresses[0].codePostal,
                    ouverture: item.properties.horaires[0].du,
                    fermeture: item.properties.horaires[0].au,
                    horairesM: item.properties.horaires[0].heures[0],
                    horairesS: item.properties.horaires[0].heures[1],
                    site: item.properties.url,
                }
            })

            this.setState({
                dataInstitution,
                institutionName: institution,
            })

        })
        .catch(error => {
            console.log(error);
        })
    };
    

    render() {
        return (
            <Container className="mt-2">
                <TitleH1>Rechercher un établissements :</TitleH1>
                <Button 
                    variant="secondary"
                    onClick={() => this.handleLoadingData("mairie")}
                >Mairie</Button>{' '}
                <Button 
                    variant="secondary"
                    onClick={() => this.handleLoadingData("commissariat_police")}
                >Commisariat de police</Button>{' '}
                <Button 
                    variant="secondary"
                    onClick={() => this.handleLoadingData("pole_emploi")}
                >Pôle emploi</Button>{' '}
                <Button 
                    variant="secondary"
                    onClick={() => this.handleLoadingData("prefecture")}
                >Préfecture</Button>
                <Row>
                    {
                        this.state.dataInstitution &&
                        this.state.dataInstitution.map(institution => {
                            return (
                                <Col md={6} key={institution.id}>
                                    <LocalisationCard {...institution}/>
                                </Col>
                        )})
                    }
                </Row>
            </Container>
        )
    };
}

export default Localisation;