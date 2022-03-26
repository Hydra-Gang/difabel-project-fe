import { Container, Row, Col } from 'react-bootstrap';
import DonationForm from './DonationForm';

const DonationPage = () => {
    return (
        <Container>
            <Row className="min-vh-100 d-flex align-items-center pb-5">
                <Col>
                    <h2 className="mb-3 fw-bold text-center" style={{ color: '#01634B' }}>DONATION PAGE</h2>
                    <DonationForm />
                </Col>
            </Row>
        </Container>
    );
};

export default DonationPage;