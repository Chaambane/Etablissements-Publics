import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import NavBar from '../../components/NavBar/NavBar';
import Accueil from './Accueil/Accueil';
import Localisation from './Localisation/Localisation';
import Contact from './Contact/Contact'
import { Route, Switch} from 'react-router-dom';
import Error404 from '../../components/Error404/Error404';
import Footer from '../../components/Footer/Footer';

class SiteManager extends Component {
    render() {
        return (
            <>
                <NavBar/>
                <Container fluid>
                    <Switch>
                        <Route path="/" exact component={Accueil}/>
                        <Route path="/localisation" exact component={Localisation}/>
                        <Route path="/contact" render={(props) => <Contact {...props}/>}/>
                        <Route path="*" render={() => <Error404/>}/>
                    </Switch>
                </Container>
                <Footer/>
            </>
        )
    };
}

export default SiteManager;