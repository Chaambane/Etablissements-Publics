import React, {Component} from 'react';
import { Container,Button } from 'react-bootstrap';
import TitleH1 from '../../../components/TitleH1/TitleH1';
import { LinkContainer } from 'react-router-bootstrap';
import { Route } from 'react-router-dom';
import FormContact from './FormContact/FormContact';

class Contact extends Component {
    render() {
        console.log(this.props);
        return (
            <Container className="mt-2">
                <TitleH1>Contactez-nous !</TitleH1>
                <div>
                    <h2>Adresse : </h2>
                    <p>XXXXXXXXXX</p>
                    <h2>Téléphone :</h2>
                    <p>00 00 00 00 00</p>
                    <h2>Vous préfèrez nous écrire?</h2>
                    <LinkContainer to={this.props.match.path + "/form"}>
                        <Button variant="success" type="submit">Formulaire de contact</Button>
                    </LinkContainer>
                    <Route path={this.props.match.path + "/form"} render={(props)=> <FormContact/>}/>
                </div>
            </Container>
        )
    };
}

export default Contact;