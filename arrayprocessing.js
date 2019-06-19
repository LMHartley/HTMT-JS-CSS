// const animals = [
//     'elephant','tiger','zebra','dragon','dog','anaconda','blue-eyes white dragon'
// ];



// const output = animals
//     .filter(item => item.length <=6)
//     .map((item,index) => {
//         if (index) {
//             return ", "+item;
//         }
//         return item;
//     })
//     .reduce((prev,item,) => prev+=item, "Animals: ");

const request = new XMLHttpRequest();
request.onload = function(){
    console.log("loaded");
    console.log(request.responseText);
}
request.open("GET", "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json");

request.send();
console.log("sent");