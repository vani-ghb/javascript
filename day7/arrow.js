// 1st Question
var processNumbers=(x,y,callback)=>{
    return callback(x,y)
}
var sum=processNumbers(3,4,(x,y)=>{
    return x+y
})
console.log("sum:",sum)

// 2nd Question
var greet=callback=>{
    return callback("Alice")
}
var x=greet((name)=> name
);
console.log("Hello,",x)

// 3rd Question
var calculate=(x,y,callback)=>{
    return callback(x,y)
}
var diff=calculate(10,5,(x,y)=> x-y
)
console.log("Difference:", diff);