const express = require('express');
const router = express.Router();
const User = require('../Models/UserSchema');
const authTokenHandler = require('../Middlewares/checkAuthToken');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const errorHandler = require('../Middlewares/errorMiddleware')

router.get('/test',async (req,res)=>{
     res.json({
        message : "Auth API is working"
    })
})


function createResponse(ok,message,data){
    return {
        ok,
        message,
        data,
    };
}

router.post('/register', async (req, res, next) => {
    try {
        const { name, email, password, city } = req.body;
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(409).json(createResponse(false, 'Email already exists'));
        }
        const newUser = new User({ name, email, password, city});
        await newUser.save(); // Await the save operation
        res.status(201).json(createResponse(newUser,true, 'User registered successfully'));

    }
    catch (err) {
        next(err)
    }
})



router.post('/login', async (req, res, next) => {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        console.log('user not found');
        return res.status(400).json(createResponse(false, 'Invalid credentials'));
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        console.log('password not matched');
        return res.status(400).json(createResponse(false, 'Invalid credentials'));
    }

    const authToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY , { expiresIn: '50m' });
    const refreshToken = jwt.sign({ userId: user._id }, process.env.JWT_REFRESH_SECRET_KEY, { expiresIn: '1d' });
    res.cookie('authToken', authToken,  { httpOnly: true });
    res.cookie('refreshToken', refreshToken, { httpOnly: true});

    res.status(200).json(createResponse(true, 'Login successful', {
        authToken,
        refreshToken
    }));
})

router.get('/checklogin', authTokenHandler, async (req, res) => {
    res.json({
        userId: req.userId,
        ok: true,
        message: 'User authenticated successfully'
    })
})


router.get('/logout',async(req,res)=>{
    res.clearCookie('authToken');
    res.clearCookie('refresgToken');
    res.json({
        ok:true,
        message:"user logged out successfully"
    })
})


router.get('/getuser',authTokenHandler,async(req,res)=>{
    const user = await User.findOne({_id:req.userId});
    if(!user){
        return res.status(400).json(createResponse(false,'Invalid credentials'))
    }
    else{
        return res.status(200).json(createResponse(true,'user found', user))
    }
})

// change user city
router.post('/changeCity', authTokenHandler, async (req, res, next) => {
    const { city } = req.body;
    const user = await User.findOne({ _id: req.userId });

    if (!user) {
        return res.status(400).json(createResponse(false, 'Invalid credentials'));
    }
    else{
        user.city = city;
        await user.save();
        return res.status(200).json(createResponse(true, 'City changed successfully'));
    }
})
router.use(errorHandler)

module.exports = router;

