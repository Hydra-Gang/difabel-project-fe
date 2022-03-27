import { Container, Row, Col } from 'react-bootstrap';
import DonationTable from './DonationTable';

const DonationList = () => {
    return (
        <Container>
            <Row className="min-vh-100 mt-5">
                <Col>
                    <h2 className="mb-3 fw-bold text-center" style={{ color: '#01634B' }}>DONATION LIST</h2>
                    <DonationTable />
                </Col>
            </Row>
        </Container>
    );
};

export default DonationList;