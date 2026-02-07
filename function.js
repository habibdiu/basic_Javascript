function get_address(){
    document.write("Khan vila-111, road-08 Mohammadia Housing Limited, Mohammadpur Dhaka");
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