const object1 = {
    name: "Zhanghao",
    unitPrice: 4,
    quantity: 12,
    participation: "no",
}
const object2 = {
    name: "Junkyu",
    unitPrice: 2.5,
    quantity: 2,
    participation: "yes",
}
const object3 = {
    name: "Yunjin",
    unitPrice: 7,
    quantity: 6,
    participation: "yes",
}
array=[ object1, object2, object3 ]
console.log(array)

    for( i=0; i<array.length; i++ ){
        console.log(array[i].quantity);
        if(array[i].quantity>=5){
            array[i].unitPrice=array[i].unitPrice*0.9;
            console.log(array[i].unitPrice);
        }
        if(array[i].participation="yes"){
            array[i].unitPrice=array[i].unitPrice*0.85;
            console.log(array[i].unitPrice);
        }
        console.log(array)
    }
