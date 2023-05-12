const Post=require('../models/post');


module.exports.home=function(req,res){

    console.log(req.cookies);

    // Post.find({},);
//populate the user 
    Post.find({}).populate('user')
    .populate({
        path: 'comments',
        populate :{
            path: 'user'
        }
    })
    
    .exec(function(err,posts){
        if(err){
            console.log(err);
        }
        return res.render('home',{
            title:"Codeial | HOME",
            posts: posts
        });
    });
}