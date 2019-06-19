
const x = JSON.parse(sessionStorage.getItem('userData'));

window.alert("Thanks, "+(x).firstname+" "+(x).surname+", your bitcoins are on the way!");


const container = document.getElementById("confirmation");


for(let key in x){
    const element = document.createElement("h4");
    element.innerText=key+": "+x[key];
    container.append(element);
}

