//question 1

let i;
for(i=1;i<=100;i++)
    {
        if(i%3==0&&i%5==0)
            console.log("FizzBuzz");
        else if(i%3==0)
            console.log("Fizz");
        else if(i%5==0)
            console.log("Buzz");
        else
            console.log(i);
    }

 //question 2
 
 function palindrome(str){
    let i,str1="";
    for(i=str.length-1;i>=0;i--){
        str1=str1.concat(str.charAt(i));
    }
    if(str==str1)
        console.log("Palindrome");
    else  
        console.log("Not")
 }
 palindrome("madam");

 //question 3

 function large(arr){
    let i,lnum=0;
    for(i=0;i<arr.length;i++)
        {
            if(arr[i]>lnum)
                lnum=arr[i];
        }
    console.log("Largest number is "+lnum);
 }
 large([1,2,3,4,5,6]);

//question 4

function count(a) {
    let hash = {};
    for (let i = 0; i < a.length; i++) {
      if (hash[a[i]] == undefined) {
        hash[a[i]] = 1;
      } else {
        hash[a[i]] += 1;
      }
    }
    return hash;
  }
  
  let a = "Bharanidharan";
  
  console.log(a);
  console.log(count(a));

//question 5

let string="hi im madhan";
let strarr=string.split(" ");
let newstrarr="";
for(let i=0;i<strarr.length;i++){
    if(strarr[i].length>newstrarr.length)
        newstrarr=strarr[i];
}
console.log("Longest word is "+newstrarr);

 //question 6

 function factorial(num){
    let ans=1;
    for(let i=1;i<=num;i++){
        ans*=i;
    }
    console.log("Factorial of "+num+" is "+ans);
 }
 factorial(5);

 //question 7

 function Fah(cel){
    let fah=(cel*9/5)+32;
    console.log(fah+" F");
 }
 Fah(1);

 //question 8

let mad=[0,1,2,3,4,5,7,8,9];
for(i=0;i<mad.length;i++){
    if(mad[i]!=i){
        console.log(i);
        break;
    }
}