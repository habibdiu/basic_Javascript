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

payment_amount = 30;

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

let course_plan = {
    "PHP" : "$20",
    "OOP" : "$3",
    "Java" : "$13",
    "Javascript" : "$8",
    "Full-Stack" : "$25",
    "Webdesign" : "$6",
    "All Package": "$65"
}

document.getElementById("demo_msg").innerHTML=  " course Idea: "+(course_plan.Java);
var value_1 = document.getElementById("demo_id");
value_1.innerHTML = "Changed";

var value_2 = document.getElementById("demo_id2");
value_2.style.border = "2px solid rgb(83 0 47)";

var value_3 = document.getElementById("demo_id3").style.color="red";

//DOM Document(get value by class name)
const dom_vlaue1 = document.getElementsByClassName("dom_elemets color");
dom_vlaue1[0].innerHTML =  "DOM Elemets is changed from js file.";

const dom_vlaue2 = document.getElementsByClassName("dom_elemets");
dom_vlaue2[1].style.backgroundColor = "red";

var elements_by_name = document.getElementsByName("name");
document.getElementById("demo_name").innerHTML= elements_by_name[0].tagName;

var elements_by_name1 = document.getElementsByName("age").length;
document.getElementById("demo_age").innerHTML = elements_by_name1;

var list = document.getElementsByTagName("li");
document.getElementById("demo_unorder_list").innerHTML = list[0].innerHTML;


var all_tag = document.getElementsByTagName("*");
let name_of_all_tags = "";
for(let i = 0; i<(all_tag.length);i++){
    name_of_all_tags += all_tag[i].tagName  +"<br>";
}
document.getElementById("all_tags").innerHTML = name_of_all_tags;

document.querySelector("p").style.backgroundColor="red";