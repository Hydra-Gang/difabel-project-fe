import { Container, Row, Col, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import DonationTable from './DonationTable';

const DonationList = ({ userAccessLevel }) => {
    return (
        <Container>
            <Row className=" mt-5">
                {userAccessLevel === 0 ? (
                    <Col>
                        <h2 className="mb-3 fw-bold text-center" style={{ color: '#01634B' }}>DONATION LIST</h2>
                        <DonationTable />
                    </Col>
                ) : (
                    <>
                        <Col lg={6}>
                            <Image src="assets/forbidden.jpg" className="w-100 mb-lg-0 mb-5" alt="Forbidden" />
                        </Col>
                        <Col lg={6} className="my-auto">
                            <h2 className="text-lg-start text-center p-lg-0 p-2" style={{ color: '#01634B' }}>You don't have permission to view this page</h2>
                        </Col>
                    </>
                )}
            </Row>
        </Container>
    );
};

DonationList.propTypes = {
    userAccessLevel: PropTypes.number
};

export default DonationList;