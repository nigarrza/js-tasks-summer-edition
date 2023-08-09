var length = prompt("Enter the length of the package", "");
console.log("The length of the package is"+" "+length);
var width = prompt("Enter the width of the package", "");
console.log("The width of the package is"+" "+width);
var height = prompt("Enter the height of the package", "");
console.log("The height of the package is"+" "+height);
var total = parseInt(length)+parseInt(width)+parseInt(height);
console.log(total);
var weight = prompt("Enter the weight of the shipment", "");
console.log("The weight of the shipment"+" "+weight);
var distance = prompt("Enter the distance of the shipment", "");
console.log("The distance of the shipment"+" "+distance);
if(length==100 || width==100 || height==100 || total==150 || weight>=10 || distance<=3 || distance>=10){
    console.log("Invalid action")
}
else{
    console.log("valid action");
}