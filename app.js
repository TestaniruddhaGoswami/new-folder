var userinput = document.querySelector("#input")
var btn = document.querySelector("#btn")

var output = document.querySelector("#output")

btn.addEventListener('click',(color1)=>{
    
     if(userinput.value.toLowerCase()==="tanvi")
     {
        output.innerHTML= "She is the best CEO"
     }
     else if(userinput.value.toLowerCase()==="tanay")
     {
        output.innerHTML= "funny mentor"
     }
     else if(userinput.value.toLowerCase()==="swapnil")
     {
        output.innerHTML= "helps us conquer jobs"
     }
     else if(userinput.value.toLowerCase()==="akansha")
     {
        output.innerHTML= "interviewer"
     }
     else 
     {
        output.innerHTML= input.value
     }

   
   
   // alert(1)

})