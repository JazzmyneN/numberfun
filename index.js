var num1 = (document.getElementById("first"));
var num2 = (document.getElementById("second"));
var num3 = (document.getElementById("third"));
var num4 = (document.getElementById("forth"));
var num5 = (document.getElementById("fifth"));
var num6 = (document.getElementById("sixth"));

var output = document.getElementById("output");


/*the "stupid and does work" zone*/
function largest() {
    var nu1 = parseFloat(num1.value);
    var nu2 = parseFloat(num2.value);
    var nu3 = parseFloat(num3.value);
    var nu4 = parseFloat(num4.value);
    var nu5 = parseFloat(num5.value);
    var nu6 = parseFloat(num6.value);

    var largest = Math.max(nu1, nu2, nu3, nu4, nu5, nu6);
    output.innerHTML = largest;
    return largest; 
}
function smallest() {
    var nu1 = parseFloat(num1.value);
    var nu2 = parseFloat(num2.value);
    var nu3 = parseFloat(num3.value);
    var nu4 = parseFloat(num4.value);
    var nu5 = parseFloat(num5.value);
    var nu6 = parseFloat(num6.value);

    var smallest = Math.min(nu1, nu2, nu3, nu4, nu5, nu6);
    output.innerHTML = smallest;
    return smallest; 
}
function average() {
    var nu1 = parseFloat(num1.value);
    var nu2 = parseFloat(num2.value);
    var nu3 = parseFloat(num3.value);
    var nu4 = parseFloat(num4.value);
    var nu5 = parseFloat(num5.value);
    var nu6 = parseFloat(num6.value);

    output.innerHTML = ""; 
    output.innerHTML += ((nu1 + nu2 + nu3 + nu4 + nu5 + nu6)/6);
}
function mode() {
    var nu1 = parseFloat(num1.value);
    var nu2 = parseFloat(num2.value);
    var nu3 = parseFloat(num3.value);
    var nu4 = parseFloat(num4.value);
    var nu5 = parseFloat(num5.value);
    var nu6 = parseFloat(num6.value);

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


    if (n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5 && n1 > n6) {
        output.innerHTML += nu1;
    
    }
    if (n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5 && n2 > n6) {
        output.innerHTML += nu2;
  
    }
    if (n3 > n2 && n3 > n1 && n3 > n4 && n3 > n5 && n3 > n6) {
        output.innerHTML += nu3;
        
    }
    if (n4 > n2 && n4 > n3 && n4 > n1 && n4 > n5 && n4 > n6) {
        output.innerHTML += nu4;
        
    }
    if (n5 > n2 && n5 > n3 && n5 > n4 && n5 > n1 && n5 > n6) {
        output.innerHTML += nu5;
       
    }
    if (n6 > n2 && n6 > n3 && n6 > n4 && n6 > n5 && n6 > n1) {
        output.innerHTML += nu6;
    
    }
    else {
        output.innerHTML = "There is no mode";
    }
}
function sort() {
    var nu1 = parseFloat(num1.value);
    var nu2 = parseFloat(num2.value);
    var nu3 = parseFloat(num3.value);
    var nu4 = parseFloat(num4.value);
    var nu5 = parseFloat(num5.value);
    var nu6 = parseFloat(num6.value);

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

    o6 = Math.max(nu1, nu2);
    
    output.innerHTML = o1 + ", " + o2 + ", " + o3 + ", " + o4 + ", " + o5 + ", " + o6;
}
function median() {

    var nu1 = parseFloat(num1.value);
    var nu2 = parseFloat(num2.value);
    var nu3 = parseFloat(num3.value);
    var nu4 = parseFloat(num4.value);
    var nu5 = parseFloat(num5.value);
    var nu6 = parseFloat(num6.value);

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


    var median = (o3 + o4)/2;
    output.innerHTML = median;
}
function range() {
    var nu1 = parseFloat(num1.value);
    var nu2 = parseFloat(num2.value);
    var nu3 = parseFloat(num3.value);
    var nu4 = parseFloat(num4.value);
    var nu5 = parseFloat(num5.value);
    var nu6 = parseFloat(num6.value);

    var range = largest() - smallest();
    output.innerHTML = range;
    return range;
}
/*the "stupid and doesnt work" zone*/

function unique() {
    var nu1 = parseFloat(num1.value);
    var nu2 = parseFloat(num2.value);
    var nu3 = parseFloat(num3.value);
    var nu4 = parseFloat(num4.value);
    var nu5 = parseFloat(num5.value);
    var nu6 = parseFloat(num6.value);

    output.innerHTML = "";
    if (nu1 !== nu2 && nu1 !== nu3 && nu1 !== nu4 && nu1 !== nu5 && nu1 !== nu6) {
        output.innerHTML += nu1;
    }
    if (nu2 !== nu1 && nu2 !== nu3 && nu2 !== nu4 && nu2 !== nu5 && nu2 !== nu6) {
        output.innerHTML += nu1;
    }
    if (nu3 !== nu2 && nu3 !== nu1 && nu3 !== nu4 && nu3 !== nu5 && nu3 !== nu6) {
        output.innerHTML += nu3;
    }
    if (nu4 !== nu2 && nu4 !== nu3 && nu4 !== nu1 && nu4 !== nu5 && nu4 !== nu6) {
        output.innerHTML += nu4;
    }
    if (nu5 !== nu2 && nu5 !== nu3 && nu5 !== nu4 && nu5 !== nu1 && nu5 !== nu6) {
        output.innerHTML += nu5;
    }
    if (nu6 !== nu2 && nu6 !== nu3 && nu6 !== nu4 && nu6 !== nu5 && nu6 !== nu1) {
        output.innerHTML += nu6;
    }
    if (output.innerHTML === "") {
        output.innerHTML = "There are no unique numbers";
    }  
}
function duplicate() {
    var nu1 = parseFloat(num1.value);
    var nu2 = parseFloat(num2.value);
    var nu3 = parseFloat(num3.value);
    var nu4 = parseFloat(num4.value);
    var nu5 = parseFloat(num5.value);
    var nu6 = parseFloat(num6.value);

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


    if (n1 > 1) {
        output.innerHTML += nu1 +" repeats " + n1 + " times. </br>" ;
    }
    if (n2 > 1) {
        output.innerHTML += nu2 +" repeats " + n2 + " times. </br>" ;
    }
    if (n3 > 1) {
        output.innerHTML += nu3 +" repeats " + n3 + " times. </br>" ;
    }
    if (n4 > 1) {
        output.innerHTML += nu4 +" repeats " + n4 + " times. </br>" ;
    }
    if (n5 > 1) {
        output.innerHTML += nu5 +" repeats " + n5 + " times. </br>" ;
    }
    if (n6 > 1) {
        output.innerHTML += nu6 +" repeats " + n6 + " times. </br>" ;
    }
  
}
