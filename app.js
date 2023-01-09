var userinput = document.querySelector("#input")
var btn = document.querySelector("#btn")

var password = document.querySelector("#password")

btn.addEventListener('click',(color1)=>{
    var b = userinput.value.toLowerCase();
    var c = password.value.toLowerCase();
     if(b===c)
     {
        output.innerHTML= "password cannot have name."
     }
     else
     {
        output.innerHTML= "thankyou."
     }
     
   
   
   // alert(1)

})