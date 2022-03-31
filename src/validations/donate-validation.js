import Joi from 'joi';

const schema = Joi.object({
    donator: Joi
        .string()
        .required()
        .max(64)
        .messages({
            'string.empty': 'Name field is required',
            'string.max': 'Name field should not contain more than 64 characters'
        }),
    money: Joi
        .number()
        .required()
        .positive()
        .messages({
            'number.base': 'Donation amount field should contain only numbers',
            'number.empty': 'Donation amount field is required',
            'number.positive': 'Donation amount field should contain positive value'
        })
});

export { schema };