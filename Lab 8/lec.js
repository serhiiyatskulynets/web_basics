// lec1
var num = 42;
console.log(typeof 42, num);
var str = "Hello"; 
console.log(typeof "", str);
var bool = true;
console.log(typeof true, bool);
var obj = {name: "..."};
console.log(typeof {}, obj);
var car;
console.log(typeof car);
var varFunction = function() {
    return "i am function";   
};
console.log(typeof varFunction, varFunction);


var numb = 52;
var st = "Hello";
var newS = Number(st);
var newNumb = String(numb);
console.log(newS, typeof newS);
console.log(newNumb, typeof newNumb);


var a = "7";
var b = 7;
console.log(a == b);
console.log(a === b);


var original = 765;
var key = 9;
var enc = original * key;
var dec = enc / key;
console.log("Encrypted:", enc);
console.log("Decrypted:", dec);



//lec2
var x = 1;
function y(){
    x = 10;
    return;
}
y();
console.log(x);//для того щоб ввивести 10 достатньо видали функцію function x(){}



//lec3
var c = 5;
-c;
c++;
--c;
typeof c;
!true;
console.log(c, c++, -c, --c, typeof c, !true); //унарні оператори 

console.log(5 + 3);
console.log(5 - 3);
console.log(5 * 3);
console.log(6 / 3);
console.log(2 ** 3);
console.log(5 > 2);
console.log("hello" + "World" + "!"); //бінарні 

var number = 20;
var result = ( 20 < 19) ? "Yes" : "No";
console.log(result); // тернарний


var line1 = "Нехай завжди буде сонце";
var line2 = "Нехай завжди буде небо";
var line3 = "Нехай завжди буде мама";
var line4 = "Нехай завжди буду я";
var text = line1.concat("\n", line2,"\n", line3,"\n", line4);
console.log(text);

