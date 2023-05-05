const Post=require('../models/post');


module.exports.home=function(req,res){

    console.log(req.cookies);

    // Post.find({},);
//populate the user 
    Post.find({}).populate('user').exec(function(err,posts){
        return res.render('home',{
            title:"Codeial | HOME",
            posts: posts
        });
    });
}