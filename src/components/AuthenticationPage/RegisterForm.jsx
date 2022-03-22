import { createContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaEnvelope, FaLock, FaPhoneAlt, FaTag } from 'react-icons/fa';
import styled from 'styled-components';
import { schema } from '../../validations/login-validation';
import RegisterFormInput from './RegisterFormInput';

const RegisterButton = styled.button`
    background-color: #01634B;

    &:hover, &:focus {
        background-color: #00533F;
    }
`;

const LoginLink = styled.a`
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const FormInputContext = createContext();

const RegisterForm = () => {
    const [data, setData] = useState({
        fullName: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
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
                <RegisterFormInput type="text" propKey="fullName" propName="Full Name" iconName={<FaTag />} />
                <RegisterFormInput type="text" propKey="phone" propName="Phone" iconName={<FaPhoneAlt />} />
                <RegisterFormInput type="text" propKey="email" propName="Email" iconName={<FaEnvelope />} />
                <RegisterFormInput type="password" propKey="password" propName="Password" iconName={<FaLock />} />
                <RegisterFormInput type="password" propKey="confirmPassword" propName="Confirm Password" iconName={<FaLock />} />
                <RegisterButton as={Button} type="submit" className="w-100 mb-3 border-0" onClick={validateForm}>Register</RegisterButton>
                <p className="text-center">Already have an account? <LoginLink href="/login" style={{ color: '#01634B' }}>Login</LoginLink></p>
            </FormInputContext.Provider>
        </Form>
    );
};

export { FormInputContext };
export default RegisterForm;