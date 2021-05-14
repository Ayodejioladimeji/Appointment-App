const Joi = require('@hapi/joi')


const postValidation = (data) => {
    const schema = {
        firstname: Joi.string().min(3).max(15).required(),
        lastname: Joi.string().min(3).max(15).required(),
        department: Joi.string().min(3).max(25).required(),
        matric: Joi.string().min(12).max(12).required(),
        time: Joi.string().required(),
        level: Joi.string().required(),
        gender: Joi.string().required(),
        message: Joi.string().min(15).required(),
    }
    return Joi.validate(data, schema)
}

const complainValidation = (data) => {
    const schema = {
        firstname: Joi.string().min(3).max(15).required(),
        lastname: Joi.string().min(3).max(15).required(),
        department: Joi.string().min(3).max(25).required(),
        matric: Joi.string().min(12).max(12).required(),
        level: Joi.string().required(),
        message: Joi.string().min(15).required(),
    }
    return Joi.validate(data, schema)
}




module.exports.postValidation = postValidation;
module.exports.complainValidation = complainValidation;