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



const fs=require('fs');

fs.readFile('cleanedfile.txt','utf-8',function help(err,data){
   if(err)return console.log('error found');
 removespaces(data);
})

function removespaces(data){

    let arr=data.split(" ");
    console.log(arr);
    let res=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].length===0 || arr[i]=='\n'){}
        else res.push(arr[i]);
    }
    console.log(res);
    var ans=res.join(" ");
    console.log(ans);
    fs.writeFile('cleanedfile.txt',ans,'utf-8',donefunc);
}
function donefunc(){
    console.log("done!!");
}