var number1 = document.querySelector("#input1")
var number2 = document.querySelector("#input2")
var add = document.querySelector("#btn1")
var sub = document.querySelector("#btn2")
var mul = document.querySelector("#btn3")
var div = document.querySelector("#btn4")
var output= document.querySelector("#output")



add.addEventListener('click',(add)=>{
    var num1= Number(number1.value);
    var num2= Number(number2.value);
    var result = num1+num2;
    output.innerHTML = result;})
    sub.addEventListener('click',(sub)=>{
        var num1= Number(number1.value);
        var num2= Number(number2.value);
        var result = num1-num2;
        output.innerHTML = result;})
        mul.addEventListener('click',(mul)=>{
            var num1= Number(number1.value);
            var num2= Number(number2.value);
            var result = num1*num2;
            output.innerHTML = result;})

            div.addEventListener('click',(div)=>{
                var num1= Number(number1.value);
                var num2= Number(number2.value);
                var result = num1/num2;
                output.innerHTML = result;})
    