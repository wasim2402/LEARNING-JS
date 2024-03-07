const URL="https://cat-fact.herokuapp.com/facts";
const factPara= document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts= async ()=>{
    console.log("getting data.......");
    let respons = await fetch(URL);
    console.log(respons);
    let data=await respons.json();
    console.log(data);
    factPara.innerText = data[4].text;
}

btn.addEventListener('click',getFacts);
