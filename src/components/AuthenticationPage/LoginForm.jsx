import { createContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from '../../axios-instance';
import { schema } from '../../validations/login-validation';
import LoginFormInput from './LoginFormInput';

const LoginButton = styled.button`
    background-color: #01634B;

    &:hover, &:focus {
        background-color: #00533F;
    }
`;

const RegisterLink = styled.a`
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const FormInputContext = createContext();

const LoginForm = ({ setIsAuthenticated }) => {
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [backendError, setBackendError] = useState('');

    const navigate = useNavigate();

    const validateForm = async (e) => {
        const result = schema.validate(data, { abortEarly: false });
        const { error } = result;

        e.preventDefault();

        if (error) {
            const errorData = {};

            for (const err of error.details) {
                const name = err.path[0];
                const message = err.message;
                errorData[name] = message;
            }

            setErrors(errorData);
        } else {
            try {
                const res = await axios.post('/auth/login', data);
                const token = res.data.data;
                localStorage.setItem('difabel', JSON.stringify(token));
                setIsAuthenticated(true);
                navigate('/');
            } catch (err) {
                const errorMessage = err.response.data.message;
                setBackendError(errorMessage);
            }
        }
    };

    return (
        <Form className="w-75 float-lg-start m-auto">
            {backendError && <div className="alert alert-success w-100 py-2 mb-2 m-auto float-lg-start text-start" role="alert">{backendError}</div>}

            <FormInputContext.Provider value={[data, setData, errors]}>
                <LoginFormInput type="text" propKey="email" propName="Email" iconName={<FaEnvelope />} />
                <LoginFormInput type="password" propKey="password" propName="Password" iconName={<FaLock />} />
                <LoginButton as={Button} type="submit" className="w-100 mb-3 border-0" onClick={validateForm}>Login</LoginButton>
                <p className="text-center">Don't have an account? <RegisterLink as={Link} to="/register" style={{ color: '#01634B' }}>Register</RegisterLink></p>
            </FormInputContext.Provider>
        </Form>
    );
};

LoginForm.propTypes = {
    setIsAuthenticated: PropTypes.func
};

export { FormInputContext };
export default LoginForm;