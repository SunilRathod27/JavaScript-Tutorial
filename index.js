// 1. JavaScript Console API 
// console.log("Hello World", 4 + 6, "Another Log");
// console.warn("Warning"); // this is warning
// console.error("This is a eroor "); // this is a erorr message print
// console.clear()



//  2 .ways to print in Javascript 
// alert("me");
// console.assert(4 == (6 - 2))
// document.write("this is document write")


// 3. JavaScript variables 
// What are Variables ? = Containers to store data values


/* Multi
line 
comment */


var number1 = 34;
var number2 = 56;

// console.log(number1 + number2);



// 4. Data Types In JavaScript

// Numbers 
var num1 = 455;
var num2 = 56.76;

//string 
var str1 = "This is a string";
var str2 = "This is also a string";

// Objects 

var marks = {
    ravi:34,
    shubham:44,
    harry:99.54
}
// console.log(marks);

// Booleans 
var a = true;
var b = false;

// console.log(a,b);

// Undefined 

var und; 
// console.log(und);

// Null 

var n = null;
// console.log(n); 

/*At a very high level , There are two types of datatypes in JavaScript
1. Primitive Data Types : undefined , null ,number , string , boolean , symbol
2. Reference data types : Arrays and objects  

*/

var arr = [ 1,2,"string",3,4,5]
// console.log(arr);


// Operator in JavaScript


// Arithmetic Operators
var a = 100;
var b = 10;

// console.log("This is value of a  + b is ", a+b);
// console.log("This is value of a  - b is ", a-b);
// console.log("This is value of a  * b is ", a*b);
// console.log("This is value of a  / b is ", a/b);


// Assignment operators 

var c = b;
// c += 2;
// c -= 2;
// c *= 2;
// c /= 2;
// console.log(c);

// Comparison Operators
var x = 34;
var y = 56;

// console.log(x == y);
// console.log(x <= y);
// console.log(x >= y);
// console.log(x > y);
// console.log(x< y);

// Logical Operators 
// Logical And 
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

//  Logical  Or  
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);


//Logical Not

// console.log(!false);
// consol.log(!true);

// Function 
 function avg(a,b)
 {
   return (a+b)/2;     
 }

 c1 = avg(4,6);
 c2 = avg(14,6);

 console.log(c1,c2);


// Conditionals In javaScript

var age = 20;

// Single if statment 
// if (age >18){
//     console.log("Your are not a Kid");
// }
// else{
//     console.log(" Your are a kid");
// }


// if - else Ladder

// if (age >32){
//     console.log("Your are not a Kid");
// }
// else if (age >4){

//     console.log(" Bache nahi Rahe");
// }
// else if (age >22){
    
//     console.log(" Yeas Bache Nahi Rahe");
// }
// else if (age >18){
    
//     console.log("18 Bache nahi Rahe ");
// }

// else {
//     console.log("bache rahe");

// }
// console.log("End Of Ladder")


// Loops 

// For Loop 

// Array iterate
var arr = [1,2,3,4,5,6,7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
  
//   if(i==2){
//   // break;
//   continue;
  
//   }
//   console.log(arr[i])
// }


// For Each Loop 
// Array iterate 
// arr.forEach(function(element){
//     console.log(element)    
// })





// const ac=0;
// ac ++;

// ac = ac+1;


// While Loop 
let j=0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// Do While Loop 
// do {
//     console.log(arr[j]);
//     j++;
    
// } while (j<arr.length);


let myarr = ["Fan", "Camera", 34,null,true];
// Array Methods 

myarr.length;

// console.log(myarr.length);
// myarr.pop(); remove last element
// myarr.push("Suni"); // Add one elemetent Last 
// myarr.shift() // First Element Remove
// myarr.unshift("Nirav"); // Return Add First element 
// console.log(myarr.unshift("Nirav"));   // Return Add First element and length return  
//  const newlan = myarr.unshift("Harry");  // Retunr new array length
//  console.log(newlan);


// console.log(myarr);


let mylovelystring = "Hello Aliter Good Morning ";
// console.log(mylovelystring.length); Return Length
// console.log(mylovelystring.indexOf("Hello")); // Return Index Number
// console.log(mylovelystring.slice(1,4)) // Return index elements 1to 4

// console.log(mylovelystring.replace("Aliter","Suni"));  // Replace Elements 
// console.log(mylovelystring.replace("Good","Bad"));


// Date 
let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime()); // Get Full Time  ISD
// console.log(myDate.getFullYear()); // get Full year 
// console.log(myDate.getDay());  // print  Day 
// console.log(myDate.getMinutes());// Print Minutes 
// console.log(myDate.getHours()); // Print Hours 


// DOM   
// Documnet object Model let
// let elem = document.getElementById("click")
// console.log(elem);

// let eleClass= document.getElementsByClassName("container")
// console.log(eleClass);

// eleClass[0].style.background="Blue"

// eleClass[0].classList.add("bg-primary")


// eleClass[0].classList.add("text-success")   Class Add 

// eleClass[0].classList.remove("text-success")  // Class Remove 

// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(eleClass[0].innerHTML);   // print html 
// console.log(eleClass[0].innerText); // print text 
// tn = document.getElementsByTagName('div');
// console.log(tn);
// createdElement = document.createElement('b');
// createdElement.innerText = "This is a Created para "
// tn[0].appendChild(createdElement);

// createdElement2 = document.createElement('p');
// createdElement2.innerText = "This is a Created Bold  "
// tn[0].replaceChild(createdElement2,createdElement);

// removeChild(element); -->  Removes an Element 

// Selecting using Query 

// sel = document.querySelector('.container');
// console.log(sel);
// sel = document.querySelectorAll('.container');
// console.log(sel);




// function clicked()
// {
//   console.log("The button was clicked ")
// };

// window.onload = function()
// {
// console.log("document was loaded");
// }


// Events in javaScript 

// fcontainer.addEventListener('click', function()
// {
//   console.log("Click On Container");
// })


// fcontainer.addEventListener('mouseover', function()
// {
//   console.log("Mouse on Container");
// })


// fcontainer.addEventListener('mouseout', function()
// {
//   console.log("Mouse Out of Container");
// })

// fcontainer.addEventListener('mouseup', function()
// {
//   console.log("Mouse Up When Clicked On Container");
// })


// fcontainer.addEventListener('mousedown', function()
// {
//   console.log("Mouse Down When Clicked On Container");
// })

// let prevHTML = document.querySelectorAll('.container')[1].val;

// fcontainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on Container");
// })

// fcontainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Mouse down when clicked on Container");
// })


// Arrow Function
// function summ(a,b){
//     return a+b;
 
// }

// Arrow Function
sum = (a,b)=>{
    return a+b;

}

logkaro = ()=>
{
    document.querySelectorAll('.container')[1].innerHTML = "<b>Set Interval Fired  </b>"

    console.log(" i am Your Log")
}
// setTimeout and setInterval

// clr = setTimeout(logkaro,2000);
// //  use  clearInterval / clearTimeout to cancel setInterval / setTimeout 
// // clearTimeout(clr) // stop time out
// // clearInterval(clr)  stop to interval 
// clr = setInterval(logkaro,5000);

// javascript localStorage


// set data  to loca storage
// localStorage.setItem('name', 'sunil')
// Show storage   data 
// localStorage 


// get data  return suni 
// localStorage.getItem('name')

// remove Item 
// localStorage.removeItem('name')

// all clear 

// localStorage.clear()


// About JSON
obj = {name: "Sunil",length:1, a:{this: "that"}}
jso = JSON.stringify(obj);
console.log(jso);


parse = JSON.parse('{"name":"Sunil","length":1,"a":{"this":"that"}}')
console.log(parse);


// Template Literals - Backticks 

a = 34;
console.log(`this is my $`{a}`)