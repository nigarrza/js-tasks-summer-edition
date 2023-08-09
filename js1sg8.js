var num = prompt("Enter the number", "");
let o = Math.floor(num/10);
console.log(o);
let t = num%10;
console.log(t);
var array1 = ["","ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
var array2 = ["","one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
for( i=0; i<=9; i++){
    if(i==o){
        console.log(array1[o])
    }
    
}
for( j=0; j<=9; j++){
    if(j==t){
        console.log(array2[t])
    }
    
}
console.log(array1[o]+" "+array2[t])