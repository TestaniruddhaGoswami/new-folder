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
    divoutput.innerHTML= "there is some error please try again."
})
}

btn.addEventListener('click',eventHandler)
