const path = require("path")
console.log(path.sep)
//
const file=path.join('/content/','subfolder','text.txt')
console.log(file)
console.log(path.basename(file))
console.log(path.resolve(__dirname,'content','subfolder','text.txt'))

