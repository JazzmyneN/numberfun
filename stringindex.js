// var doc1 = document.getElementById("first");
// var doc2 = document.getElementById("second");

// var output = document.getElementById("output");
// function welcome(){
//     alert("Hello World");
//     document.getElementById("output").innerHTML = "Hello World";
//     return true;
// }
// function same(){
//     var first = document.getElementById("first").value;
//     var second = document.getElementById("second").value;
//     if(first === second){
//         document.getElementById("output").innerHTML = "They are the same";
//     }
//     else{
//         document.getElementById("output").innerHTML = "They are not the same";
//     }
//     return true;
// }
// function wordLength(){
//     var first = doc1.value.length;
//     var second = doc2.value.length;
//     output.innerHTML = "The length of the first word is "+first+" and the length of the second word is "+ second;
//     return true;
// }
// function capitalized(){
//     output.innerHTML = doc1.value.toUpperCase();
//     output.innerHTML += " "+ doc2.value.toUpperCase();
//     return true;
// }
// function  capFirst(){
//     output.innerHTML = doc1.value.charAt(0).toUpperCase() + doc1.value.slice(1).toLowerCase();
//     output.innerHTML +=" "+ doc2.value.charAt(0).toUpperCase() + doc2.value.slice(1).toLowerCase();
//     return true;
// }
// function vowels(){
//     var l1 = doc1.value.charAt(0);
//     var l2 = doc1.value.charAt(1);
//     var l3 = doc1.value.charAt(2);
//     var l4 = doc1.value.charAt(3);
//     var l5 = doc1.value.charAt(4);
//     var l6 = doc1.value.charAt(5);
//     output.innerHTML = "";
//     if(l1 === "a" || l2 === "a" || l3 === "a" || l4 === "a" || l5 === "a" || l6 === "a"){
//         output.innerHTML += "a";
//     }
//     if(l1 === "e" || l2 === "e" || l3 === "e" || l4 === "e" || l5 === "e" || l6 === "e"){
//         output.innerHTML += "e";
//     }
//     if(l1 === "i" || l2 === "i" || l3 === "i" || l4 === "i" || l5 === "i" || l6 === "i"){
//         output.innerHTML += "i";
//     }
//     if(l1 === "o" || l2 === "o" || l3 === "o" || l4 === "o" || l5 === "o" || l6 === "o"){
//         output.innerHTML += "o";
//     }
//     if(l1 === "u" || l2 === "u" || l3 === "u" || l4 === "u" || l5 === "u" || l6 === "u"){
//         output.innerHTML += "u";
//     }
//     //second word
//     l1 = doc2.value.charAt(0);
//     l2 = doc2.value.charAt(1);
//     l3 = doc2.value.charAt(2);
//     l4 = doc2.value.charAt(3);
//     l5 = doc2.value.charAt(4);
//     l6 = doc1.value.charAt(5);
//     output.innerHTML += "";
//     if(l1 === "a" || l2 === "a" || l3 === "a" || l4 === "a" || l5 === "a" || l6 === "a"){
//         output.innerHTML += "a";
//     }
//     if(l1 === "e" || l2 === "e" || l3 === "e" || l4 === "e" || l5 === "e" || l6 === "e"){
//         output.innerHTML += "e";
//     }
//     if(l1 === "i" || l2 === "i" || l3 === "i" || l4 === "i" || l5 === "i" || l6 === "i"){
//         output.innerHTML += "i";
//     }
//     if(l1 === "o" || l2 === "o" || l3 === "o" || l4 === "o" || l5 === "o" || l6 === "o"){
//         output.innerHTML += "o";
//     }
//     if(l1 === "u" || l2 === "u" || l3 === "u" || l4 === "u" || l5 === "u" || l6 === "u"){
//         output.innerHTML += "u";
//     }
// }
// function removeVowels(){
//     var l1 = doc1.value.charAt(0);
//     var l2 = doc1.value.charAt(1);
//     var l3 = doc1.value.charAt(2);
//     var l4 = doc1.value.charAt(3);
//     var l5 = doc1.value.charAt(4);
//     var l6 = doc1.value.charAt(5);
//     output.innerHTML = "";
//     if(l1 !== "a" || l1 !== "a" || l3 !== "a" || l1 !== "a" || l1 !== "a" || l1 !== "a"){
//         output.innerHTML += l1;
//     }
//     if(l2 !== "e" || l2 !== "e" || l3 !== "e" || l4 !== "e" || l5 !== "e" || l6 !== "e"){
//         output.innerHTML += l2;
//     }
//     if(l3 !== "i" || l2 !== "i" || l3 !== "i" || l4 !== "i" || l5 !== "i" || l6 !== "i"){
//         output.innerHTML += l3;
//     }
//     if(l4 !== "o" || l2 !== "o" || l3 !== "o" || l4 !== "o" || l5 !== "o" || l6 !== "o"){
//         output.innerHTML += l4;
//     }
//     if(l5 !== "u" || l2 !== "u" || l3 !== "u" || l4 !== "u" || l5 !== "u" || l6 !== "u"){
//         output.innerHTML += l5;
//     }
//     //second word
//     l1 = doc2.value.charAt(0);
//     l2 = doc2.value.charAt(1);
//     l3 = doc2.value.charAt(2);
//     l4 = doc2.value.charAt(3);
//     l5 = doc2.value.charAt(4);
//     l6 = doc1.value.charAt(5);
//     output.innerHTML += "";
//     if(l1 !== "a" || l1 !== "a" || l1 !== "a" || l1 !== "a" || l1 !== "a" || l1 !== "a"){
//         output.innerHTML += l1;
//     }
//     if(l1 !== "e" || l2 !== "e" || l3 !== "e" || l4 !== "e" || l5 !== "e" || l6 !== "e"){
//         output.innerHTML += l2;
//     }
//     if(l1 !== "i" || l2 !== "i" || l3 !== "i" || l4 !== "i" || l5 !== "i" || l6 !== "i"){
//         output.innerHTML += l3;
//     }
//     if(l1 !== "o" || l2 !== "o" || l3 !== "o" || l4 !== "o" || l5 !== "o" || l6 !== "o"){
//         output.innerHTML += l4;
//     }
//     if(l1 !== "u" || l2 !== "u" || l3 !== "u" || l4 !== "u" || l5 !== "u" || l6 !== "u"){
//         output.innerHTML += l5;
//     }
// }