// function get_address(){
//     document.write("Khan vila-111, road-08 Mohammadia Housing Limited, Mohammadpur Dhaka");
// }

function get_address(){
    let city_name = "";
    let person_name = "";
    let ssc_roll = "";
    let marks = "";

    city_name = document.getElementById("city_name").value;
    person_name = document.getElementById("person_name").value;
    ssc_roll = document.getElementById("ssc_roll").value;
    marks = document.getElementById("result_in_grade").innerHTML;

    if( person_name=="" || marks==""|| ssc_roll==""){
        if(marks==""){
            alert("Please enter the value for: Marks");
        }
        else if(person_name==""){
            alert("Please enter the value for: Person Name");
        }
        else if(ssc_roll==""){
            alert("Please enter the value for: SSC Roll");
        }
    }
    else{
        alert("Name: "+person_name+ "\nLiving: "+city_name+"\nSSS Info: "+ssc_roll+"\nGrade: "+marks);
    }
}

function get_grade(){
    let result= "";
    result = document.getElementById("marks").value;
    
    if(result>=0 && result<=32){
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
    else if(result>69 && result<=79){
        document.getElementById.innerHTML="A";
    }
    else if(result>79 && result<=100){
        document.getElementById("result_in_grade").innerHTML="A+";
    }
    else{
        document.getElementById("result_in_grade").innerHTML="please_enter_valid_number!";
    }
}

function set_color(){
    document.getElementById("set_color").style.color="green";
}

function change_effect(){
    var ssc_roll= "";
    ssc_roll = document.getElementById("ssc_roll").value;
    if(ssc_roll>=1000 && ssc_roll<=8000){
        document.getElementById("ssc_roll").style.color="red";
    }
    else if(ssc_roll>8000 && ssc_roll<=10000){
        document.getElementById("ssc_roll").style.color="green";
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