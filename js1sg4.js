var a = prompt("How many people?", "");
let amount = parseInt(a);
if(amount<=2){
    console.log("Small table");
}
if(2<amount && amount<=4){
    console.log("Medium table");
}
if(4<amount && amount<=8){
    console.log("Large table");
}
if(amount>8){
    console.log(amount/8);
    console.log(amount%8);
    console.log(Math.floor(amount/8)+""+"large tables");

}
if(amount>8 && 0<amount%8 && amount%8<=2){
    console.log("1 Small table")
}
if(amount>8 && 2<amount%8 && amount%8<=4){
    console.log("Medium table");
}
if(amount>8 && 4<amount%8 && amount%8<=8){
    console.log("Large table");
}