var userinput = document.querySelector("#input")
var logb = document.querySelector("#input1")
var warnb = document.querySelector("#input2")
var errorb = document.querySelector("#input3")
var output = document.querySelector("#output")

logb.addEventListener('click',(color1)=>{
    
    output.innerHTML =  userinput.value;
   
    output.style.color="black"
   // alert(1)

})
warnb.addEventListener('click',(color2)=>{
    output.innerHTML =  userinput.value;
   
    output.style.color="yellow";
    

})
errorb.addEventListener('click',(color3)=>{
    output.innerHTML =  userinput.value;
   
    output.style.color="red";

})