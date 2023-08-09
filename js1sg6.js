var name = prompt("Enter your name", "");
var age = prompt("Enter your age", "");
var orders = prompt("Enter the number of orders", "");

let g = parseInt(orders);
let f=0;
for ( i=0; i<g; i++ ){
    var amount = prompt("Enter amounts of orders", "");
    f=f+parseInt(amount)
    
}
console.log(f);

if( parseInt(age)>=60 || parseInt(orders)>=4 || f>=100){
    alert("Congratulations! You have recieved a discount.")
}
else{
    alert("You have received nothing. Have a nice day!")
}