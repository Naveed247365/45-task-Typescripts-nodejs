//define verianles
var apple = "apple";
var UppercaseApple = "APPLE";
var five = 5;
var ten = 10;
var colour = ["black", "red", "green"];
// test for equality and inequality with strings
console.log("is apple is equal to apple?");
console.log(apple == "apple");
console.log("is apple is not equal to apple?");
console.log(apple != "apple");
// test using lowercase funtion
console.log("is APPLE is equal to apple after converting to lowercase?");
console.log(UppercaseApple.toLowerCase() == "apple");
console.log("is APPLE is not equal to apple after converting to lowercase?");
console.log(UppercaseApple.toLowerCase() != "apple");
//nomerical test
console.log("is five is equal to ten?");
console.log(five == ten);
console.log("is five is not equal to ten?");
console.log(five != ten);
//greater then less then
console.log("is five is greater then ten?");
console.log(five > ten);
console.log("is five is less then ten?");
console.log(five < ten);
// greater then and equal to
console.log("is ten is greater then or equal to 5?");
console.log(ten >= 5);
// less then or equal 
console.log("is ten is less then or equal to 5?");
console.log(10 <= 5);
// test "and" and or oppertores
console.log("10 is not equal to 5 and ten is greater then 5?");
console.log(ten != 5 && 10 > 5);
console.log("10 is not equal to 5 and ten is greater then 15?");
console.log(ten != 5 && 10 > 15);
console.log("10 is greater then 15 or 5 is equal to 5?");
console.log(10 > 15 || 5 == 5);
console.log("10 is greater then 15 or 5 is equal to 5?");
console.log(10 > 15 || 5 != 5);
// test whether an item is include in arrey
console.log("is black include in my colours arrey?");
console.log(colour.includes("black"));
console.log("red is not include in my colours arrey?");
console.log(!colour.includes("red"));
