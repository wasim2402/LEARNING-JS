let btn=document.querySelector("#btn");
btn.onclick=()=>{
    console.log("Button was clicked");
    let a=25;
    a++;
    console.log(a);
}
let box=document.querySelector("div");
box.onmouseover=()=>{
    console.log("You are inside the div");
}