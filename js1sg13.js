// var p = prompt("Enter your money","")
// let g = p/100;
// let h = p%100;
// let x = Math.floor(g);
// let t = Math.floor(h/10);
// let r = h%10;
// console.log(g);
// console.log(h)
// console.log(x)
// console.log(t)
// console.log(r)
// if(x>0){
//     for( i=1; i<=x; i++){
//         console.log("100")
//     }
// }
// if(t>0){
//     for( j=1; j<=t; j++){
//         console.log("10")
//     }
// }
// if(r>0){
//     for( k=1; k<=r; k++){
//         console.log("1")
//     }
// }


const amount = prompt('Enter value', '');
const denominations = [100, 50, 20, 10, 5, 1];
for (let i = 0; i < denominations.length; i++) {
    const denomination = denominations[i];
    while (amount >= denomination) {
        console.log(denomination);
        amount -= denomination;
    }
}