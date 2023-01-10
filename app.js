var userinput = document.querySelector("#input")
var userpassword = document.querySelector("#password")
var btn = document.querySelector("#btn")

btn.addEventListener('click',(eventHandler)=>{
  //alert(1)
  if(userinput.value === userpassword.value)
  {
        btn.disabled =false;
  }
  else{
    btn.disabled=true
  }

}
  
)