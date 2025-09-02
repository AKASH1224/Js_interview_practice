let num =[1,2,3,4,6,20]
// for(let i =0; i < a.length; i++)
// {
//     console.log(a[i])
// }
//For Each Loop- 
num.forEach((element)=>{
    console.log(element*element)
})
// from loop - it used to convert the js obj in array
// let name="Akash";
// let arr =Array.from(name)
// console.log(arr)

// ==for of loop-shortcut of for loop
for(let i of num){
    console.log(i)
}
// == for in loop - it is smiliar to for of floop
for(let item in num){
    console.log(item)
}