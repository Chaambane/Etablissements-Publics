import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import NavBar from '../../components/NavBar/NavBar';
import Accueil from './Accueil/Accueil';
import Localisation from './Localisation/Localisation';
import Contact from './Contact/Contact'
import { Route, Switch} from 'react-router-dom';

class SiteManager extends Component {
    render() {
        return (
            <Container fluid>
                <NavBar/>
                <Switch>
                    <Route path="/" exact component={Accueil}/>
                    <Route path="/localisation" exact component={Localisation}/>
                    <Route path="/contact" exact component={Contact}/>
                </Switch>
            </Container>
        )
    };
}

export default SiteManager;