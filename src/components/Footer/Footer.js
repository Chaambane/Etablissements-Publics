import React from 'react';
import { Container} from 'react-bootstrap';

const footer = (props) => (
    <Container fluid expand="lg" fixed="bottom" className="mt-2 p-1 bg-info rounded">
        <p className="text-center fw-bold">@F.Chaambane - Tout droit reservé</p>
    </Container>
);

export default footer;