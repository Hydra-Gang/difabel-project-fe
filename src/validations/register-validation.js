import Joi from 'joi';

const schema = Joi.object({
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
        .messages({
            'string.empty': 'Password field is required',
            'string.min': 'Password field should contain at least 8 characters',
            'string.max': 'Password field should not contain more than 64 characters',
        })
});

export { schema };