var add = function(num1, num2) {
	return num1 + num2;
}
var subtract = function(num1, num2) {
	return num1 - num2;
}
var multiply = function(num1, num2) {
	return num1 * num2;
}
var divide = function(num1, num2) {
	return num1 / num2;
}

var one_num = parseInt(prompt("Enter a number: "));
var two_num = parseInt(prompt("Enter an additional number: "));

alert(divide(one_num, two_num));
