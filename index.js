var  http=require("http")
var fs=require("fs")
var url=require("url")

var port=3007;
var server=http.createServer((req,res)=>{

    var parsedurl=url.parse(req.url,true)

    console.log(req.method);
        if(req.method=="GET"){
            fs.readFile("./data.json","utf-8",(err,data)=>{
                if(err){
                    res.write("error");
                    res.end();
                }else{
                    res.write(data)
                    res.end();
                }
            });
        }else{
            res.write("file is not found")
        }
    });








server.listen(port,()=>{
    console.log("the server is running")
});