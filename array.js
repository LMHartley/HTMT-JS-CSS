const arr = [10];
let total = 0;

function arrcount(){
    for(let v of arr){
        total+=parseInt(v);
    }
    window.alert(total);
}