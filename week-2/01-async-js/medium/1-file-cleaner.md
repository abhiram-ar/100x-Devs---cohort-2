## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```


```javascript
let fs = require("fs")

fs.readFile("a.txt", "utf-8" ,(error, data)=>{
  if(error) throw error
  console.log("read sucess")
  console.log(data)

  let newdata = data.replace(/\s+/g, ' ');
  console.log(newdata)
})
