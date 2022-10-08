const {readFileSync,writeFileSync}=require("fs");
const fi=readFileSync('./content/subcontent/first.txt',"utf-8");
const se=readFileSync('./content/subcontent/second.txt','utf-8');
// console.log(se,fi);
// console.log(fi,se);
const b="<br>";
writeFileSync(
    './content/subcontent/second.txt',
    `<---This is ${fi}+${se}${b}---><br>`,{ flag : 'a'}
)
const se2=readFileSync('./content/subcontent/second.txt','utf-8');
console.log(se2);
