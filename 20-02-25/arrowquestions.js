
 //1
 var demo=()=>console.log("Hello World");
demo();
//2
 var add=(a,b)=>{
    return a+b;
}
console.log(add(2,3))
//3
var square=n=>n*n
console.log(square(4))
//4
var demo=a=>console.log(a);
demo(10);
 //5
    //implicit
    var cube=n=>n**3                                //dircet console 
    console.log(cube(3))
    //explicit
    var cube1=m=>{
        return m**3
    }
    console.log(cube1(3))

//6
var x=(a,b)=>{
    return b-a
    }
    console.log(x(1,3))
    // 7
    var a=()=>{
        return "hello world!"
    }
    console.log(a())
  
