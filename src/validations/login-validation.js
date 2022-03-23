import Joi from 'joi';

const validatePhone = (val) => {
    const res = val.match(/[0-9]+/g);

    if (res?.length && val === res[0]) {
        return val;
    }

    throw Error('Invalid phone format');
};

const schema = Joi.object({
    fullName: Joi
        .string()
        .required()
        .max(64)
        .messages({
            'string.empty': 'Full name field is required',
            'string.max': 'Full name field should not contain more than 64 characters'
        }),
    phone: Joi
        .string()
        .required()
        .min(10)
        .max(32)
        .custom(validatePhone)
        .messages({
            'string.empty': 'Phone field is required',
            'string.min': 'Phone field should contain at least than 10 characters',
            'string.max': 'Phone field should not contain more than 32 characters',
            'string.custom': 'Invalid phone format'
        }),
    email: Joi
        .string()
        .required()
        .max(64)
        .email({ tlds: { allow: false } })
        .messages({
            'string.empty': 'Email field is required',
            'string.max': 'Email field should not contain more than 64 characters',
            'string.email': 'Invalid email format'
        }),
    password: Joi
        .string()
        .required()
        .min(8)
        .max(64)
        .regex(/[0-9]/)
        .rule({ message: 'Password field requires at least a number' })
        .regex(/[a-z]/)
        .rule({ message: 'Password field requires at least a lowercase character' })
        .regex(/[A-Z]/)
        .rule({ message: 'Password field requires at least an uppercase character' })
        .regex(/[^a-zA-Z\d]/)
        .rule({ message: 'Password field requires at least a special character' })
        .messages({
            'string.empty': 'Password field is required',
            'string.min': 'Password field should contain at least 8 characters',
            'string.max': 'Password field should not contain more than 64 characters',
        }),
    confirmPassword: Joi
        .any()
        .valid(Joi.ref('password'))
        .messages({
            'any.only': 'Password does not match'
        })
});

export { schema };