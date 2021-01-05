const http= require("http");
const fs=require("fs");
//reading html file pages 
const fc=fs.readFileSync('index.html');
const a=fs.readFileSync('about.html');
const b=fs.readFileSync('other.html');
const app=http.createServer(function(req,res){
    //printing requested urls in your console
    console.log(req.url);
    
    url=req.url;
    res.statusCode=200;
    res.setHeader('content-type','text/html');
    if(url=='/'){
        res.end(fc);
    }
    else if(url=='/about'){
        res.end(a);
    }
    else if(url=='/other'){
        res.end(b);
    }
    else{
        res.write("error 404 !");
    }
     
});
app.listen(3030,function(){
    console.log("hello anchal");
});
