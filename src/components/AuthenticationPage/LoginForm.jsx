import { createContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import styled from 'styled-components';
import { schema } from '../../validations/register-validation';
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

const LoginForm = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const validateForm = (e) => {
        const result = schema.validate(data, { abortEarly: false });
        const { error } = result;

        if (error) {
            e.preventDefault();

            const errorData = {};

            for (const err of error.details) {
                const name = err.path[0];
                const message = err.message;
                errorData[name] = message;
            }

            setErrors(errorData);
        }
    };

    return (
        <Form method="POST" className="w-75 float-lg-start m-auto">
            <FormInputContext.Provider value={[data, setData, errors]}>
                <LoginFormInput type="text" propKey="email" propName="Email" iconName={<FaEnvelope />} />
                <LoginFormInput type="password" propKey="password" propName="Password" iconName={<FaLock />} />
                <LoginButton as={Button} type="submit" className="w-100 mb-3 border-0" onClick={validateForm}>Login</LoginButton>
                <p className="text-center">Don't have an account? <RegisterLink href="/register" style={{ color: '#01634B' }}>Register</RegisterLink></p>
            </FormInputContext.Provider>
        </Form>
    );
};

export { FormInputContext };
export default LoginForm;