import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import TitleH1 from '../../components/TitleH1/TitleH1';

class PublicInstitutionManager extends Component {
    render() {
        return (
            <Container className="mt-2">
                <TitleH1>Bienvenue sur le site des Pyrénées-orientales</TitleH1>
            </Container>
        )
    };
}

export default PublicInstitutionManager;