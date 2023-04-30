const express=require('express');
const router= express.Router();
const passport=require('passport');
const UserController=require('../controller/users_controller');

router.get('/profile',passport.checkAuthentication,UserController.profile);


router.get('/sign-up',UserController.signup);

router.get('/sign-in',UserController.signin);

router.post('/create',UserController.create);
//use passport as a middleware to authenticate
// router.post('/create-session',UserController.createSession);

router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-in'},
),UserController.createSession);

router.get('/sign-out',UserController.destroySession);

module.exports=router;