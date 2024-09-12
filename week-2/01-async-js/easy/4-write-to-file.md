## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.


```javascript

let fs = require("fs")

fs.appendFile("a.txt", "hey boii I am new file" ,(error)=>{
  if(error) throw error
  console.log("sucess")
})
