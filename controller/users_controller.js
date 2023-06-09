
const User=require('../models/users');

module.exports.profile=function(req,res){
    User.findById(req.params.id,function(err,user) {
        return res.render('users', {
            title: 'User Profile',
            profile_user:user
    });
   
    });
    
}
module.exports.update = function(req,res) {
    if(req.user.id == req.params.id){
        User.findByIdAndUpdate(req.params.id,req.body,function(err,user) {
            return res.redirect('back');
        })
    }else{
        return res.status(401).send('Unauthorized');
    }

}

module.exports.signup=function(req,res){

    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_up',{
        title : "Codial | signup"
    });
}

module.exports.signin=function(req,res){

    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_in',{
        title : "Codial | signin"
    });
}

module.exports.create=function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email:req.body.email},function(err,user) {
        if(err){
            console.log('Error in finding user in signing up ');
            return;
        }
        if(!user){
            User.create(req.body,function(err,user) {
                if(err){
                    console.log('Error in creating the user during signup');
                }
                console.log('user created sucessfully ');
            return;
            })
            return res.redirect('/users/sign-in');
        }
        else{
            return res.redirect('back');
        }
    });
}

module.exports.createSession=function(req,res){
//   //  find the user

//     User.findOne({email:req.body.email},function(err,user){
//         if(err){
//             console.log('Error in finding the user in signin');
//             return;
//         }
//         if(user){
//             if(user.password != req.body.password){
//                 return res.redirect('back');
//             }
//             res.cookie('user_id',user.id);
//             return res.redirect('/users/profile');
//         }
//         else{
//             return res.redirect('back');
//         }
//     })

 return res.redirect('/');
   }

 module.exports.destroySession= function(req,res) {
    req.logout(function(err) {
        if(err){
            console.log(err);
        }
        return res.redirect('/');
    });
   }


