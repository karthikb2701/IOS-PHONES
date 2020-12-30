const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const mongoose=require("mongoose");

const app=express();


app.set("view engine","ejs")
app.use( express.static( "public" ) );
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb://localhost:27017/IPhoneDB",{useNewUrlParser:true});
const phoneSchema={
     title:String,
        frontcameraid:String,
        priceid:Number,
        imageid:String,
        cameraid:String,
        batteryid:String,
        displayid:String,
        ramid:String,
        processorid:String
      
        
};

const Post = mongoose.model("Post",phoneSchema);
 


app.get("/",function(req,res){
    
    
    Post.find({}, function(err, posts){
    res.render("list", {
        
      kid:"sorry",
      posts: posts
      });
  });
});
    
//    var today=new Date();
//    
//    var options={
//        weekday: "long",
//        day:"numeric",
//        month:"long"
//    };
//    
//    var day=today.toLocaleDateString("en-US",options);
////    var postlen=posts.length;
////    var pst=posts[postlenght];
//
//    
//    res.render("list",{kind:day, posts:posts});

//app.post("/",function(req,res){
//    
////    res.render("android");
////    console.log(req.body)
//
//
//   
//})

//app.post("/android",function(req,res){
//   const nd=req.body.android;
//    console.log(nd);
//    
//});

app.get("/compose",function(req,res){
    res.render("compose"); 
    
   
}) 


app.get("/android",function(req,res){
    
    
    Post.find({}, function(err, posts){
        
    res.render("android", {
        
      kid:"sorry",
      posts: posts
      });
  });
});

app.post("/compose", function(req,res){
     
   
    
    
    
    
    
    
    
    const post= new Post({
        title:req.body.brand,
        frontcameraid:req.body.frontcamera,
        imageid:req.body.image,
        priceid:req.body.price,
        batteryid:req.body.battery,
        ramid:req.body.ram,
        cameraid:req.body.camera,
        displayid:req.body.display,
        processorid:req.body.processor
         
    
        
        
    });
    
    
   
   post.save(function(err){
    if (!err){ 

         
       res.redirect("/");

    };
        
   });
    });   
    
    
    

app.get("/posts/:postId", function(req, res){

const requestedPostId = req.params.postId;

  Post.findOne({_id: requestedPostId}, function(err, post){
    res.render("posts",{
        
      title:post.title,
        imageid:post.imageid,
    
        priceid:post.priceid,
        
        frontcameraid:post.frontcameraid,
        
        
        batteryid:post.batteryid,
        ramid:post.ramid,
        cameraid:post.cameraid,
        displayid:post.displayid,
        processorid:post.processorid
    });
  });
//
});

//app.get("/ios",function(req,res){
//    res.render("ios");
//});



app.listen(3000,function(req,res){
    console.log("serserser");
})
