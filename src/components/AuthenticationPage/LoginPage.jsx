import { Container, Row, Col, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';

const LoginPage = ({ setIsAuthenticated }) => {
    return (
        <Container>
            <Row className="min-vh-100 d-flex align-items-center pb-5">
                <Col lg={6}>
                    <Image src="assets/authentication.png" className="w-100" alt="Authentication" />
                </Col>
                <Col lg={6}>
                    <h2 className="mb-3 fw-bold text-lg-start text-center" style={{ color: '#01634B' }}>LOGIN PAGE</h2>
                    <LoginForm setIsAuthenticated={setIsAuthenticated} />
                </Col>
            </Row>
        </Container>
    );
};

LoginPage.propTypes = {
    setIsAuthenticated: PropTypes.func
};

export default LoginPage;