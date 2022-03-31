import { createContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaEnvelope, FaLock, FaPhoneAlt, FaTag } from 'react-icons/fa';
import styled from 'styled-components';
import axios from 'axios';
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
    const [backendError, setBackendError] = useState('');
    const [successMessage, setSuccessMessage] = useState(false);

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
            const { confirmPassword, ...newData } = data;

            try {
                await axios.post('http://localhost:5000/v1/auth/register', newData);

                setData({
                    fullName: '',
                    phone: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                });

                setSuccessMessage(true);
            } catch (err) {
                const errorMessage = err.response.data.message;
                setBackendError(errorMessage);
            }
        }
    };

    return (
        <Form className="w-75 float-lg-start m-auto">
            {backendError && <div className="alert alert-success w-100 py-2 mb-2 m-auto float-lg-start text-start" role="alert">{backendError}</div>}
            {successMessage && <div className="alert alert-success w-100 py-2 mb-2 m-auto float-lg-start text-start" role="alert" style={{ zIndex: '1' }}>Registration successful. You can <a href="/login">login</a> now</div>}

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