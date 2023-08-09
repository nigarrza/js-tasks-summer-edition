let a = prompt("Please enter a number", "");


//     METHOD-1
// for( i=1; i<=1000; i++){
//     if(i%a==0){
//         console.log("jo")
//     }
//     else{
//         console.log("woo")
//     }
// }



    // METHOD-2
// let j=0;
// do {
//     if(j%a==0){
//         console.log(j)
//     }
//     j++;
// }while (j<1000)



for (let num = 1; num <= 1000; num++) {
    if (num % a === 0) {
      console.log(num);
    }
  }
