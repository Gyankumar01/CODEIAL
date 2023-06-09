const Post = require('../../../models/post');
const Comment = require('../../../models/comment');
module.exports.index=async function(req,res) {

    let posts = await Post.find({}).populate('user')
    .populate({
        path: 'comments',
        populate :{
            path: 'user'
        }
    });


    res.json(200, {
        message: " List of post",
        posts: posts 
    })
}

module.exports.destroy= async function(req,res) {
  try{let post  = await Post.findById(req.params.id);
        
    post.remove();

    await Comment.deleteMany({post: req.params.id});
    return res.json(200,{
        message:"post deleted successfully"
    });}
    catch(err){
        
        return res.json(500,{
         message:"Internal server error"
        }) ;
     }
    }
        
          
       

   
    
    
