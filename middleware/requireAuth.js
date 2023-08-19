const jwt = require('jsonwebtoken');
const user = require('../models/UserModel');

const requireAuth = async(req, res, next) => {

    //verify authentication
    const {authorization} = req.headers;

    if(!authorization){
        res.status(401).json({error: 'Authorization token required'});
    }

    console.log(authorization);

    const token = authorization.split(' ')[1];

    try{
        const {_id} = jwt.verify(token,process.env.SECRET);

        req.user = await user.findOne({_id}).select('_id');
        next();

    } catch(error){
        console.log(error);
        res.status(401).json({error: 'Request is not authorized'});
    }

}

module.exports = requireAuth;