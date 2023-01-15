const inputText=document.getElementById("inputText")
const container=document.getElementsByClassName("container")[0];
function addlist(){
    if(inputText.value !=="")
    {  let h1=document.createElement("h1");
    h1.innerHTML="-"+inputText.value;
    h1.style.textAlign="left";
    h1.style.fontSize="2rem";
    h1.style.cursor="pointer"
    h1.style.paddingLeft="70px";
    container.appendChild(h1);
    inputText.value="";
    h1.addEventListener("click",function(){
        if(h1.style.textDecoration=="line-through"){
            h1.style.textDecoration="none";
        }
        else{
            h1.style.textDecoration="line-through"
        }
    })
    h1.addEventListener("dblclick",function(){
        container.removeChild(h1);
    })}
    else{
        alert("List cannot be empty ! ")
    }
}