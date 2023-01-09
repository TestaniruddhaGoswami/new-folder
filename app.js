var btn = document.querySelector("#input");
//alert(1)
var divoutput = document.querySelector("#output");
function eventHandler()
{  var url = "https://stock-api.desaihetav.repl.co/lst";
fetch(url)
.then((response)=>response.json())
.then((data)=>{
    
data.data.map(item =>{
    divoutput.innerHTML += `<li>${item.id}</li>`
  })

  
})
.catch((error)=>{
    if(error.status = 404)
    divoutput.innerHTML= "not found."
   else if (error.status = 401)
    divoutput.innerHTML = "you are not logged in."
})
}

btn.addEventListener('click',eventHandler)
