## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


let counter=0;

function print(){
    console.clear();
    console.log(counter);
    counter=counter+1;
    setTimeOut(print,1000);
}

setTimeOut(print,1000);



































































(Hint: setTimeout)