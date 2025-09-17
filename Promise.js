// const promises =new Promise((resolve,reject)=>{ 
//     let a=20;
//     if(a >10){
//         resolve("Opration Success Ful")
//     }else{
//         reject('Oprarion failed ')
//     }
// });

// promises.then(()=>{console.log("this is success")})
// .catch(()=>{console.log("Operation Failed")})

const Promises =new Promise((resolve,reject)=>{
let x=20;
if(x>10){
    resolve("s")
}else{
    reject("f")
}
});
Promises.then(()=>{console.log("Hit")}).catch(()=>{"Failed"})
fetch('http://api.steampowered.com/ISteamApps/GetAppList/v0002/?format=json').then((res)=>res.json()).
then(data=> {const apps=data.applist.apps;
    apps.forEach(element => {
            console.log(element)
    });

})
.catch((err)=>console.log(err))