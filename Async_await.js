// fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((res)=>res.json()).then((data)=>console.log(data.name)).
// catch((err)=>console.log(err))
const Fetch =async ()=> {
    try{
    const res = await  fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const data= await res.json();
    console.log(data)
}

catch(err)
{
    console.log(err)
}}
Fetch()