const express=require('express');

const router= express.Router();

const UserController=require('../controller/users_controller');

router.get('/profile',UserController.profile);


router.get('/sign-up',UserController.signup);

router.get('/sign-in',UserController.signin);

router.post('/create',UserController.create);

router.post('/create-session',UserController.createSession);



module.exports=router;