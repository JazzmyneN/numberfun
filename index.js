var num1 = (document.getElementById("first"));
var num2 = (document.getElementById("second"));
var num3 = (document.getElementById("third"));
var num4 = (document.getElementById("forth"));
var num5 = (document.getElementById("fifth"));
var num6 = (document.getElementById("sixth"));

var output = document.getElementById("output");

function largest() {
    num1 = parseFloat(num1.value);
    num2 = parseFloat(num2.value);
    num3 = parseFloat(num3.value);
    num4 = parseFloat(num4.value);
    num5 = parseFloat(num5.value);
    num6 = parseFloat(num6.value);

    if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5 && num1 > num6) {
        output.innerHTML = num1;
    }
    if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5 && num2 > num6) {
        output.innerHTML = num2;
    }
    if (num3 > num2 && num3 > num1 && num3 > num4 && num3 > num5 && num3 > num6) {
        output.innerHTML = num3;
    }
    if (num4 > num2 && num4 > num3 && num4 > num1 && num4 > num5 && num4 > num6) {
        output.innerHTML = num4;
    }
    if (num5 > num2 && num5 > num3 && num5 > num4 && num5 > num1 && num5 > num6) {
        output.innerHTML = num5;
    }
    if (num6 > num2 && num6 > num3 && num6 > num4 && num6 > num5 && num6 > num1) {
        output.innerHTML = num6;
    }
}
function smallest() {
    num1 = parseFloat(num1.value);
    num2 = parseFloat(num2.value);
    num3 = parseFloat(num3.value);
    num4 = parseFloat(num4.value);
    num5 = parseFloat(num5.value);
    num6 = parseFloat(num6.value);

    if (num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5 && num1 < num6) {
        output.innerHTML = num1;
    }
    if (num2 < num1 && num2 < num3 && num2 < num4 && num2 < num5 && num2 < num6) {
        output.innerHTML = num2;
    }
    if (num3 < num2 && num3 < num1 && num3 < num4 && num3 < num5 && num3 < num6) {
        output.innerHTML = num3;
    }
    if (num4 < num2 && num4 < num3 && num4 < num1 && num4 < num5 && num4 < num6) {
        output.innerHTML = num4;
    }
    if (num5 < num2 && num5 < num3 && num5 < num4 && num5 < num1 && num5 < num6) {
        output.innerHTML = num5;
    }
    if (num6 < num2 && num6 < num3 && num6 < num4 && num6 < num5 && num6 < num1) {
        output.innerHTML = num6;
    } 
}
function average() {
    num1 = parseFloat(num1.value);
    num2 = parseFloat(num2.value);
    num3 = parseFloat(num3.value);
    num4 = parseFloat(num4.value);
    num5 = parseFloat(num5.value);
    num6 = parseFloat(num6.value);

    output.innerHTML = ""; 
    output.innerHTML += ((num1 + num2 + num3 + num4 + num5 + num6)/6);
}
function unique() {
    num1 = parseFloat(num1.value);
    num2 = parseFloat(num2.value);
    num3 = parseFloat(num3.value);
    num4 = parseFloat(num4.value);
    num5 = parseFloat(num5.value);
    num6 = parseFloat(num6.value);

    output.innerHTML = "";
    if (num1 !== num2 && num1 !== num3 && num1 !== num4 && num1 !== num5 && num1 !== num6) {
        output.innerHTML += num1;
    }
    if (num2 !== num1 && num2 !== num3 && num2 !== num4 && num2 !== num5 && num2 !== num6) {
        output.innerHTML += num2;
    }
    if (num3 !== num2 && num3 !== num1 && num3 !== num4 && num3 !== num5 && num3 !== num6) {
        output.innerHTML += num3;
    }
    if (num4 !== num2 && num4 !== num3 && num4 !== num1 && num4 !== num5 && num4 !== num6) {
        output.innerHTML += num4;
    }
    if (num5 !== num2 && num5 !== num3 && num5 !== num4 && num5 !== num1 && num5 !== num6) {
        output.innerHTML += num5;
    }
    if (num6 !== num2 && num6 !== num3 && num6 !== num4 && num6 !== num5 && num6 !== num1) {
        output.innerHTML += num6;
    }
    if (output.innerHTML === "") {
        output.innerHTML = "There are no unique numbers";
    }  
}
function duplicate() {
    num1 = parseFloat(num1.value);
    num2 = parseFloat(num2.value);
    num3 = parseFloat(num3.value);
    num4 = parseFloat(num4.value);
    num5 = parseFloat(num5.value);
    num6 = parseFloat(num6.value);

    output.innerHTML = "";
    if (num1 === num2 && num1 === num3 && num1 === num4 && num1 === num5 && num1 === num6) {
        output.innerHTML = num1;
    } else {
        if (num1 === num2 || num1 === num3 || num1 === num4 || num1 === num5 || num1 === num6) {
            output.innerHTML += num1;
        }
        if (num2 === num3 || num2 === num4 || num2 === num5 || num2 === num6) {
            output.innerHTML += num2;
        }
        if (num3 === num4 || num3 === num5 || num3 === num6) {
            output.innerHTML += num3;
        }
        if (num4 === num5 || num4 === num6) {
            output.innerHTML += num4;
        }
        if (num5 === num6) {
            output.innerHTML += num5;
        }
    }

    if (output.innerHTML === "") {
        output.innerHTML = "There are no duplicates";
    }  
}
function mode() {
    num1 = parseFloat(num1.value);
    num2 = parseFloat(num2.value);
    num3 = parseFloat(num3.value);
    num4 = parseFloat(num4.value);
    num5 = parseFloat(num5.value);
    num6 = parseFloat(num6.value);

    var n1 = 1;
    var n2 = 1;
    var n3 = 1;
    var n4 = 1;
    var n5 = 1;
    var n6 = 1;

    if (num1 === num2) {
        n1 += 1;
    }  if (num1 === num3) {
        n1 += 1;
    }  if (num1 === num4) {
        n1 += 1;
    }  if (num1 === num5) {
        n1 += 1;
    }  if (num1 === num6) {
        n1 += 1;
    }
    
    
    if (num2 === num3) {
        n2 += 1;
    }  if (num2 === num4) {
        n2 += 1;
    }  if (num2 === num5) {
        n2 += 1;
    }  if (num2 === num6) {
        n2 += 1;
    }

      if (num3 === num4) {
        n3 += 1;
    }  if (num3 === num5) {
        n3 += 1;
    }  if (num3 === num6) {
        n3 += 1;
    }

    
     if (num4 === num5) {
        n4 += 1;
    }  if (num4 === num6) {
        n4 += 1;
    }

    if (num5 === num6) {
        n5 += 1;
    }


    if (n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5 && n1 > n6) {
        output.innerHTML = num1;
    
    }
    if (n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5 && n2 > n6) {
        output.innerHTML = num2;
  
    }
    if (n3 > n2 && n3 > n1 && n3 > n4 && n3 > n5 && n3 > n6) {
        output.innerHTML = num3;
        
    }
    if (n4 > n2 && n4 > n3 && n4 > n1 && n4 > n5 && n4 > n6) {
        output.innerHTML = num4;
        
    }
    if (n5 > n2 && n5 > n3 && n5 > n4 && n5 > n1 && n5 > n6) {
        output.innerHTML = num5;
       
    }
    if (n6 > n2 && n6 > n3 && n6 > n4 && n6 > n5 && n6 > n1) {
        output.innerHTML = num6;
    
    }
    
}

/*the "stupid and doesnt work" zone*/
function sort() {
    num1 = parseFloat(num1.value);
    num2 = parseFloat(num2.value);
    num3 = parseFloat(num3.value);
    num4 = parseFloat(num4.value);
    num5 = parseFloat(num5.value);
    num6 = parseFloat(num6.value);
}
function median() {
    num1 = parseFloat(num1.value);
    num2 = parseFloat(num2.value);
    num3 = parseFloat(num3.value);
    num4 = parseFloat(num4.value);
    num5 = parseFloat(num5.value);
    num6 = parseFloat(num6.value);

}
function range() {
    num1 = parseFloat(num1.value);
    num2 = parseFloat(num2.value);
    num3 = parseFloat(num3.value);
    num4 = parseFloat(num4.value);
    num5 = parseFloat(num5.value);
    num6 = parseFloat(num6.value);
}

