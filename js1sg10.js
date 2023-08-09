var a = prompt("Enter the initial amount","");
var b = prompt("Enter the duration in years","");
var c = prompt("Enter the percent", "");

let p = parseInt(b);

let o = parseInt(a);

let j = parseInt(c);



for ( i=0; i<p; i++ ){

    gu=o*j/100;
    ju=o+gu;
    o=ju
    console.log(gu);
    console.log(ju);
    console.log(o);
}