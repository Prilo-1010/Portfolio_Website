const Client = require('../models/contactModel')
const validator = require('email-validator')

exports.newClient = async (req, res, next) => {
    let { fullname, email, subject, message } = req.body;

    let emptyFields = []

    if(!fullname){
        emptyFields.push('fullname')
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }
    if(!email){
        emptyFields.push('email')
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
  }
    // if(email){
    //     validator.validate(email); 
    //     emptyFields.push('email')
    //     return res.status(400).json({error: 'Please enter a correct email', emptyFields})
    // }
    if(!subject){
        emptyFields.push('subject')
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }
    if(!message){
        emptyFields.push('message')
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }
    if(emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }
    try {
        let client = new Client(fullname, email, subject, message);

        client = await client.save();
        res.status(201).json({ message: "New Client" })
    } catch (error) {
        console.log(error)
        next(error)
    }

}
