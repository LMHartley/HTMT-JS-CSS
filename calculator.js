function calc(operator){
    const a = parseInt(document.getElementById('inputA').value)
    const b = parseInt(document.getElementById('inputB').value)
    switch (operator){
        case '+': add(a,b);break;
        case '-': sub(a,b);break;
        case 'x': mult(a,b);break;
        case '%': div(a,b);break;
    } 
}
function add(a,b){
    const res = a + b;
    document.getElementById("result").value = res;
    const resultElement = document.createElement('p');
    resultElement.innerText = a+"+"+b+"="+res;
    document.getElementById('history').appendChild(resultElement);
    
}
function sub(a,b){
    const res = a - b;
    document.getElementById('result').value = res;
    const resultElement = document.createElement('p');
    resultElement.innerText = a+"-"+b+"="+res;
    document.getElementById('history').appendChild(resultElement);
}
function mult(a,b){
    const res = a * b;
    document.getElementById('result').value = res;
    const resultElement = document.createElement('p');
    resultElement.innerText = a+"x"+b+"="+res;
    document.getElementById('history').appendChild(resultElement);
}
function div(a,b){
    const res = a / b;
    document.getElementById('result').value = res;
    const resultElement = document.createElement('p');
    resultElement.innerText = a+"%"+b+"="+res;
    document.getElementById('history').appendChild(resultElement);
}