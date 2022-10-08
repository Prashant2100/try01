const {readFile,writeFile}=require("fs");
console.log("sytart")
readFile("./content/subcontent/first.txt","utf-8",(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result)
    readFile("./content/subcontent/second.txt","utf-8",(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        writeFile("./content/subcontent/second2.txt",
        "NEW ",
        (err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log("DONE");
            return
        }
        )
    })
    return; 
})
console.log("end")