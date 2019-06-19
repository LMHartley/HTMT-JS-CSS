function calc2(){
    const a = +document.getElementById('inputA').value
    const b = +document.getElementById('inputB').value

    return{
        add2: function(){
            writeOutput(a+b);res=a+b;historyOutput('+');
        },
        sub2: function(){
            writeOutput(a-b);res=a-b;historyOutput('-');
        },
        mult2: function(){
            writeOutput(a*b);res=a*b;historyOutput('x');
        },
        div2: function(){
            writeOutput(a/b);res=a/b;historyOutput('/');
        }
    };
    function writeOutput(out){
        console.log(out);
        document.getElementById('result').value = out;
    }
    function historyOutput(operator){
        const resultElement2 = document.createElement('p');
        resultElement2.innerText = a+operator+b+"="+res;
        document.getElementById('history1').appendChild(resultElement2);
    }
}
