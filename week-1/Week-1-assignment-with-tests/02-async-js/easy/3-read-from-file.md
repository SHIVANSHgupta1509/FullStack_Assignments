## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 

let fs=require('fs');

let data=fs.readFile(help.txt,'utf-8',function printFile(err,data){
    if(err){console.log('error recieved);return;}
    console.log(data);
})
let sum=0;
for(int i=0;i<10000;i++){sum+=i;}
conosle.log(sum);
