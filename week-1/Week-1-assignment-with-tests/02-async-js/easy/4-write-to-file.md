## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.




const fs=require('fs');

let data='Mai kuch bi likh donga file banake';
fs.writeFile('banadifile.txt',data,'utf-8',callBack);
function callBack(err){
    if(err)console.log('error aya');
    else{
        console.log("file banadi");
    }
}