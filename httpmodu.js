const http=require("http")
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('END OF \\')
    }
    else if(req.url==='/about'){
    res.write('lll')}
    else{res.write("errtrrt")}
    console.log(req);
    res.end();

})
server.listen(5000)
