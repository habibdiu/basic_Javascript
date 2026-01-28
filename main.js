document.write('<h1 style="color: rgb(0, 7, 28)">Basic Javascript Lesson with h1 tag under JS</h1>');
let name = "Habib";
var age = 28;

document.write("Name: "+name+" and Age: "+age);

//Demo person deatils with const varible(let,var,const,any_var_name)
const person_name = "Mustafizur Rahman";
const phone = "01771708977";
const email = "mustafiz22@gmail.com"
const website = "mustafiziconbd.com";

console.log("My Details:"+"\n"+person_name+"\n"+phone+"\n"+email+"\n"+website);

//Operators in Javascript
// Arithmatic operators = (+,-,*,/,%)
// Increment and Decrement operator = (++, --)
// Assignment operators = (=, +=,-=,*=,/=,%= )
// Comparison/Conditional operators = (==, !=, !==, ===, >,<, >=, <=)
// Logical operator = (&&, || , !)
// Ternary operator = ( condition? conditionIfTrue : conditionIfFalse)

//Data Types Javascript
// Number, String, Array, Boolean, Object

let product_price = 120, product_qty = 3;
let total_price, payment_amount, due_amount;

total_price = (product_price*product_qty);

payment_amount = 300;

if(payment_amount == total_price){
    console.log("Thanks for making your full payment!");
}
else if(payment_amount <total_price){
    due_amount = (total_price-payment_amount);
    console.log("You have paid: "+payment_amount+" taka. Due amount: "+due_amount+" taka!")
}
else if(payment_amount>total_price){
    console.log("Paid amount: "+payment_amount+" taka. Return: "+(payment_amount-total_price)+" taka");
}

//const txt_msg = "Learn Document.getElement By ID";
let payment = 1000;
const fee1="Full paid", fee2 = "Not paid yet";

if(payment==9000){
    document.getElementById("txt_msg").innerHTML=fee1;
}
else{
    document.getElementById("txt_msg").innerHTML = fee2;
}

//Stying with rgb ex1: rgb(145,255,255)/ rgb(10%,20%,100%)
//Sizing in html selector ( 1inc/ 6pc(pcas)/ 72pt(points)/ 96px(pixel) )
//Margin in html ( margin: 5px 3px 5px 3px); top right bottom left (Clockwise)

//Array in Javascript
var persons = [
    "Habib",
    "Shahid",
    "Jaman",
    "Nasir",
    "Fazlu",
    "Karim",
    "Mohin"
];
let new_persons="";
persons.forEach((person)=>{
    new_persons+=person+"<br>";
    document.getElementById("txt_msg").innerHTML= new_persons;
});