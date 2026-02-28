// function get_address(){
//     document.write("Khan vila-111, road-08 Mohammadia Housing Limited, Mohammadpur Dhaka");
// }

function get_address(){
    let user_address = " ";
    user_address = document.getElementById("city_name").value;
    if(user_address==""){
        alert("Please enter address in the form first");
    }
    else{
        alert(user_address);
    }
}

function get_grade(){
    let result= "";
    result = document.getElementById("marks").value;
    
    if(result<=32){
        document.getElementById("result_in_grade").innerHTML="Fail";
    }
    else if(result>32 && result<=39){
        document.getElementById("result_in_grade").innerHTML="D";
    }
    else if(result>39 && result<=49){
        document.getElementById("result_in_grade").innerHTML="C";
    }
    else if(result>49 && result<=59){
        document.getElementById("result_in_grade").innerHTML="B";
    }
    else if(result>59 && result<=69){
        document.getElementById("result_in_grade").innerHTML="A-";
    }
    else if(result>70 && result<=79){
        document.getElementById.innerHTML="A";
    }
    else if(result>79 && result<=100){
        document.getElementById("result_in_grade").innerHTML="A+";
    }
}

function get_calculator(){
    let value1 = "", value2 = "", add_button="", subtract_button="", multiplicate_button="",division_button="";
    value1 = parseInt(document.getElementById("first_number").value);
    value2 = parseInt(document.getElementById("second_number").value);
    console.log(value1);
    console.log(value2);
    let result="";

    add_button = document.getElementById("add_button").innerText;

    if(value1==="" && value2===""){
        document.getElementById("calculation_result").innerHTML=result;      
    }
    else{
        if(add_button=="+"){
            result = (value1+value2);
            document.getElementById("calculation_result").innerHTML=result;
            result="";
        }
        else if(subtract_button=="-"){
            result = (value1-value2);
            document.getElementById("calculation_result").innerHTML=result;
        }
        else if(multiplicate_button=="*"){
            result = (value1*value2);
            document.getElementById("calculation_result").innerHTML=result;
        }
        else if(division_button=="/"){
            result = (value1/value2);
            document.getElementById("calculation_result").innerHTML=result;
        }
    }
}