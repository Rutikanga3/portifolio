
function bar(){
    document.getElementById("nlist").style.display="block"
}
let s= document.querySelector("#sm");

function send(){
    document.querySelector("#sm").innerHTML="Recieved"


}
s.addEventListener("click",send)