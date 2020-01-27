//taking form input and parsing for int variable
var num1 = (document.getElementById("first"));
var num2 = (document.getElementById("second"));
var num3 = (document.getElementById("third"));
var num4 = (document.getElementById("fourth"));
var num5 = (document.getElementById("fifth"));
var num6 = (document.getElementById("sixth"));

//allows functions to change the output box
var output = document.getElementById("output");

//functions

//finds largest
function largest() {
    output.innerHTML = "";
    var nu1 = parseFloat(num1.value);
    var nu2 = parseFloat(num2.value);
    var nu3 = parseFloat(num3.value);
    var nu4 = parseFloat(num4.value);
    var nu5 = parseFloat(num5.value);
    var nu6 = parseFloat(num6.value);

    //uses Math to find largest one, displays
    var largest = Math.max(nu1, nu2, nu3, nu4, nu5, nu6);
    output.innerHTML = largest;
    return largest; 
}
//finds smallest
function smallest() {
    output.innerHTML = "";
    var nu1 = parseFloat(num1.value);
    var nu2 = parseFloat(num2.value);
    var nu3 = parseFloat(num3.value);
    var nu4 = parseFloat(num4.value);
    var nu5 = parseFloat(num5.value);
    var nu6 = parseFloat(num6.value);
    
    //uses Math to find smallest one, displays
    var smallest = Math.min(nu1, nu2, nu3, nu4, nu5, nu6);
    output.innerHTML = smallest;
    return smallest; 
}
//finds average
function average() {
    output.innerHTML = "";
    var nu1 = parseFloat(num1.value);
    var nu2 = parseFloat(num2.value);
    var nu3 = parseFloat(num3.value);
    var nu4 = parseFloat(num4.value);
    var nu5 = parseFloat(num5.value);
    var nu6 = parseFloat(num6.value);

    //adds all values together, divides by number of values (6 in this case)
    output.innerHTML = ""; 
    output.innerHTML += ((nu1 + nu2 + nu3 + nu4 + nu5 + nu6)/6);
}
//finds which appears most
function mode() {
    output.innerHTML = "";
    var nu1 = parseFloat(num1.value);
    var nu2 = parseFloat(num2.value);
    var nu3 = parseFloat(num3.value);
    var nu4 = parseFloat(num4.value);
    var nu5 = parseFloat(num5.value);
    var nu6 = parseFloat(num6.value);

    //keeps track of how many times something appears
    var n1 = 0;
    var n2 = 0;
    var n3 = 0;
    var n4 = 0;
    var n5 = 0;
    var n6 = 0;

    //Checks against other numbers to see if it appears more than once
    if (nu1 === nu2) {
        n1 += 1;
    }  if (nu1 === nu3) {
        n1 += 1;
    }  if (nu1 === nu4) {
        n1 += 1;
    }  if (nu1 === nu5) {
        n1 += 1;
    }  if (nu1 === nu6) {
        n1 += 1;
    }
    
    
    if (nu2 === nu3) {
        n2 += 1;
    }  if (nu2 === nu4) {
        n2 += 1;
    }  if (nu2 === nu5) {
        n2 += 1;
    }  if (nu2 === nu6) {
        n2 += 1;
    }

      if (nu3 === nu4) {
        n3 += 1;
    }  if (nu3 === nu5) {
        n3 += 1;
    }  if (nu3 === nu6) {
        n3 += 1;
    }

    
     if (nu4 === nu5) {
        n4 += 1;
    }  if (nu4 === nu6) {
        n4 += 1;
    }

    if (nu5 === nu6) {
        n5 += 1;
    }

    //checks how many times it appears, compares and finds largest (displays the largest number of appearance, may be more than one number)
    if (n1 === n2 && n1 === n3 && n1 === n4 && n1===n5 && n1===n6) {
        output.innerHTML = "There is no mode."
    }
    else if (n1 >= n2 && n1 >= n3 && n1 >= n4 && n1 >= n5 && n1 >= n6) {
        output.innerHTML += nu1 + " is the mode. <br/>";
    
    }
    else if (n2 >= n1 && n2 >= n3 && n2 >= n4 && n2 >= n5 && n2 >= n6) {
        output.innerHTML += nu2 + " is the mode. <br/>";
  
    }
    else if (n3 >= n2 && n3 >= n1 && n3 >= n4 && n3 >= n5 && n3 >= n6 ) {
        output.innerHTML += nu3 + " is the mode. <br/>";
        
    }
    else if (n4 >= n2 && n4 >= n3 && n4 >= n1 && n4 >= n5 && n4 >= n6) {
        output.innerHTML += nu4 + " is the mode. <br/>";
        
    }
    else if (n5 >= n2 && n5 >= n3 && n5 >= n4 && n5 >= n1 && n5 >= n6) {
        output.innerHTML += nu5 + " is the mode. <br/>";
       
    }
    else if (n6 >= n2 && n6 >= n3 && n6 >= n4 && n6 >= n5 && n6 >= n1) {
        output.innerHTML += nu6 + " is the mode. <br/>";
    }
    
}
//sorts smallest to largest
function sort() {
    var nu1 = parseFloat(num1.value);
    var nu2 = parseFloat(num2.value);
    var nu3 = parseFloat(num3.value);
    var nu4 = parseFloat(num4.value);
    var nu5 = parseFloat(num5.value);
    var nu6 = parseFloat(num6.value);
    output.innerHTML = "";
    // keeps track of order
    o1 = 0;
    o2 = 0;
    o3 = 0;
    o4 = 0;
    o5 = 0;
    o6 = 0;

    //find the smallest, checks which one it is, then reshuffles the set of numbers to goes again until there is only one number left (the largest)
    o1 = Math.min(nu1, nu2, nu3, nu4, nu5, nu6);
    if (o1 === nu1) {
        nu1 = nu2;
        nu2 = nu3;
        nu3 = nu4;
        nu4 = nu5;
        nu5 = nu6;
    } else if (o1 === nu2){
        nu1 = nu1;
        nu2 = nu3;
        nu3 = nu4;
        nu4 = nu5;
        nu5 = nu6;
    } else if (o1 === nu3){
        nu1 = nu1;
        nu2 = nu2;
        nu3 = nu4;
        nu4 = nu5;
        nu5 = nu6;
    } else if (o1 === nu4){
        nu1 = nu1;
        nu2 = nu2;
        nu3 = nu3;
        nu4 = nu5;
        nu5 = nu6;
    }
    else if (o1 === nu5){
        nu1 = nu1;
        nu2 = nu2;
        nu3 = nu3;
        nu4 = nu4;
        nu5 = nu6;
    }

    o2 = Math.min(nu1, nu2, nu3, nu4, nu5);
    if (o2 === nu1) {
        nu1 = nu2;
        nu2 = nu3;
        nu3 = nu4;
        nu4 = nu5;
     
    } else if (o2 === nu2){
        nu1 = nu1;
        nu2 = nu3;
        nu3 = nu4;
        nu4 = nu5;
      
    } else if (o2 === nu3){
        nu1 = nu1;
        nu2 = nu2;
        nu3 = nu4;
        nu4 = nu5;
       
    } else if (o2 === nu4){
        nu1 = nu1;
        nu2 = nu2;
        nu3 = nu3;
        nu4 = nu5;
    }

    o3 = Math.min(nu1, nu2, nu3, nu4);  
    if (o3 === nu1) {
        nu1 = nu2;
        nu2 = nu3;
        nu3 = nu4;
    } else if (o3 === nu2){
        nu1 = nu1;
        nu2 = nu3;
        nu3 = nu4;
        
    } else if (o3 === nu3){
        nu1 = nu1;
        nu2 = nu2;
        nu3 = nu4;
    } 

    o4 = Math.min(nu1, nu2, nu3);
    if (o4 === nu1) {
        nu1 = nu2;
        nu2 = nu3;
    } else if (o4 === nu2){
        nu1 = nu1;
        nu2 = nu3;
    }

    // sets the last two numbers
    o5 = Math.min(nu1, nu2);

    o6 = Math.max(nu1, nu2);

    // prints in order
    output.innerHTML = o1 + ", " + o2 + ", " + o3 + ", " + o4 + ", " + o5 + ", " + o6;
}
//finds middle value
function median() {
    output.innerHTML = "";
    var nu1 = parseFloat(num1.value);
    var nu2 = parseFloat(num2.value);
    var nu3 = parseFloat(num3.value);
    var nu4 = parseFloat(num4.value);
    var nu5 = parseFloat(num5.value);
    var nu6 = parseFloat(num6.value);

    //same as sorting, this is so we can take the middle values
    o1 = 0;
    o2 = 0;
    o3 = 0;
    o4 = 0;
    o5 = 0;
    o6 = 0;

    o1 = Math.min(nu1, nu2, nu3, nu4, nu5, nu6);
    if (o1 === nu1) {
        nu1 = nu2;
        nu2 = nu3;
        nu3 = nu4;
        nu4 = nu5;
        nu5 = nu6;
    } else if (o1 === nu2){
        nu1 = nu1;
        nu2 = nu3;
        nu3 = nu4;
        nu4 = nu5;
        nu5 = nu6;
    } else if (o1 === nu3){
        nu1 = nu1;
        nu2 = nu2;
        nu3 = nu4;
        nu4 = nu5;
        nu5 = nu6;
    } else if (o1 === nu4){
        nu1 = nu1;
        nu2 = nu2;
        nu3 = nu3;
        nu4 = nu5;
        nu5 = nu6;
    }
    else if (o1 === nu5){
        nu1 = nu1;
        nu2 = nu2;
        nu3 = nu3;
        nu4 = nu4;
        nu5 = nu6;
    }

    o2 = Math.min(nu1, nu2, nu3, nu4, nu5);
    if (o2 === nu1) {
        nu1 = nu2;
        nu2 = nu3;
        nu3 = nu4;
        nu4 = nu5;
     
    } else if (o2 === nu2){
        nu1 = nu1;
        nu2 = nu3;
        nu3 = nu4;
        nu4 = nu5;
      
    } else if (o2 === nu3){
        nu1 = nu1;
        nu2 = nu2;
        nu3 = nu4;
        nu4 = nu5;
       
    } else if (o2 === nu4){
        nu1 = nu1;
        nu2 = nu2;
        nu3 = nu3;
        nu4 = nu5;
    }

    o3 = Math.min(nu1, nu2, nu3, nu4);  
    if (o3 === nu1) {
        nu1 = nu2;
        nu2 = nu3;
        nu3 = nu4;
    } else if (o3 === nu2){
        nu1 = nu1;
        nu2 = nu3;
        nu3 = nu4;
        
    } else if (o3 === nu3){
        nu1 = nu1;
        nu2 = nu2;
        nu3 = nu4;
    } 

    o4 = Math.min(nu1, nu2, nu3);
    if (o4 === nu1) {
        nu1 = nu2;
        nu2 = nu3;
    } else if (o4 === nu2){
        nu1 = nu1;
        nu2 = nu3;
    }

    o5 = Math.min(nu1, nu2);
    if (o2 === nu1) {
        nu1 = nu2;
       
    }
    o6 = nu2;

    // takes the middle values and finds the average
    var median = (o3 + o4)/2;
    output.innerHTML = median;
}
//finds difference between largest and smallest
function range() {
    var nu1 = parseFloat(num1.value);
    var nu2 = parseFloat(num2.value);
    var nu3 = parseFloat(num3.value);
    var nu4 = parseFloat(num4.value);
    var nu5 = parseFloat(num5.value);
    var nu6 = parseFloat(num6.value);

    // minuses the smallest from the largest to find range
    var range = largest() - smallest();
    output.innerHTML = range;
    return range;
}
//finds any unique values
function unique() {
    var nu1 = parseFloat(num1.value);
    var nu2 = parseFloat(num2.value);
    var nu3 = parseFloat(num3.value);
    var nu4 = parseFloat(num4.value);
    var nu5 = parseFloat(num5.value);
    var nu6 = parseFloat(num6.value);

    output.innerHTML = "";

    // checks if numbers only appear once in their set, if so, displays them
    if (nu1 !== nu2 && nu1 !== nu3 && nu1 !== nu4 && nu1 !== nu5 && nu1 !== nu6) {
        output.innerHTML += nu1+ " is unique <br/>";
    }
    if (nu2 !== nu1 && nu2 !== nu3 && nu2 !== nu4 && nu2 !== nu5 && nu2 !== nu6) {
        output.innerHTML += nu2+ " is unique <br/>";
    }
    if (nu3 !== nu2 && nu3 !== nu1 && nu3 !== nu4 && nu3 !== nu5 && nu3 !== nu6) {
        output.innerHTML += nu3+ " is unique <br/>";
    }
    if (nu4 !== nu2 && nu4 !== nu3 && nu4 !== nu1 && nu4 !== nu5 && nu4 !== nu6) {
        output.innerHTML += nu4+ " is unique <br/>";
    }
    if (nu5 !== nu2 && nu5 !== nu3 && nu5 !== nu4 && nu5 !== nu1 && nu5 !== nu6) {
        output.innerHTML += nu5+ " is unique <br/>";
    }
    if (nu6 !== nu2 && nu6 !== nu3 && nu6 !== nu4 && nu6 !== nu5 && nu6 !== nu1) {
        output.innerHTML += nu6 + " is unique <br/>";
    }
    if (output.innerHTML === "") {
        output.innerHTML = "There are no unique numbers";
    }  
}
//finds any duplicate values
function duplicate() {
    var nu1 = parseFloat(num1.value);
    var nu2 = parseFloat(num2.value);
    var nu3 = parseFloat(num3.value);
    var nu4 = parseFloat(num4.value);
    var nu5 = parseFloat(num5.value);
    var nu6 = parseFloat(num6.value);

    output.innerHTML = "";
    // keeps track of how many times a number appears
    var n1 = 1;
    var n2 = 1;
    var n3 = 1;
    var n4 = 1;
    var n5 = 1;
    var n6 = 1;

    if (nu1 === nu2) {
        n1 += 1;
        
    }  if (nu1 === nu3) {
        n1 += 1;
     
    }  if (nu1 === nu4) {
        n1 += 1;
        
    }  if (nu1 === nu5) {
        n1 += 1;
     
    }  if (nu1 === nu6) {
        n1 += 1;
    
    }
    
    
    if (nu2 === nu3) {
        n2 += 1;
    }  if (nu2 === nu4) {
        n2 += 1;
    }  if (nu2 === nu5) {
        n2 += 1;
    }  if (nu2 === nu6) {
        n2 += 1;
    }

      if (nu3 === nu4) {
        n3 += 1;
    }  if (nu3 === nu5) {
        n3 += 1;
    }  if (nu3 === nu6) {
        n3 += 1;
    }

    
     if (nu4 === nu5) {
        n4 += 1;
    }  if (nu4 === nu6) {
        n4 += 1;
    }

    if (nu5 === nu6) {
        n5 += 1;
    }


    // checks if it appears more than once, AND isn't already stated
    if (n1 > 1) {
        output.innerHTML  = "";
        output.innerHTML += nu1 +" repeats " + n1 + " times. </br>" ;
    }
    if (n2 > 1 && nu2 !== nu1) {
        output.innerHTML += nu2 +" repeats " + n2 + " times. </br>" ;
    }
    if (n3 > 1 && nu3 !== nu2 && nu3 !== nu1) {
        output.innerHTML += nu3 +" repeats " + n3 + " times. </br>" ;
    }
    if (n4 > 1 && nu4 !== nu2 && nu4 !== nu3 && nu4 !== nu1 ) {
        output.innerHTML += nu4 +" repeats " + n4 + " times. </br>" ;
    }
    if (n5 > 1 && nu5 !== nu2 && nu5 !== nu3 && nu5 !== nu4 && nu5 !== nu1) {
        output.innerHTML += nu5 +" repeats " + n5 + " times. </br>" ;
    }
    if (n6 > 1 && nu6 !== nu2 && nu6 !== nu3 && nu6 !== nu4 && nu6 !== nu5 && nu6 !== nu1) {
        output.innerHTML += nu6 +" repeats " + n6 + " times. </br>" ;
    }
    else {
        output.innerHTML = "There are no duplicates";
    }
}
