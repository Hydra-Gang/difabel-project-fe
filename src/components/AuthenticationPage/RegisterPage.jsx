import { Container, Row, Col, Image } from 'react-bootstrap';
import RegisterForm from './RegisterForm';

const RegisterPage = () => {
    return (
        <Container>
            <Row className="min-vh-100 d-flex align-items-center pb-5">
                <Col lg={6}>
                    <Image src="assets/authentication.png" className="w-100" alt="Authentication" />
                </Col>
                <Col lg={6}>
                    <h2 className="mb-3 fw-bold text-lg-start text-center" style={{ color: '#01634B' }}>REGISTER PAGE</h2>
                    <RegisterForm />
                </Col>
            </Row>
        </Container>
    );
};

export default RegisterPage;