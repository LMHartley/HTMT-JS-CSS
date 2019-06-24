const formdata = {};

function getUsers(username){
    const request = new XMLHttpRequest();
    request.onload = function(){
        const parsedData = JSON.parse(request.responseText);
        console.log("DATA:", parsedData);
        displayData(parsedData,username);
    }
    request.open("GET", "https://us-central1-qac-sandbox.cloudfunctions.net/getUsers");

    request.send();
    console.log("sent");
}
function displayData(data,username){
    const filteredData = document.createElement("div");
    filteredData.id = "FD";

    for(let user in data){
        if(user == username){
            const name = document.createElement("h2");
            name.innerText = user;
            filteredData.append(name);
        }
        if(user == username){
            for(let k in data[user]){
                const x = document.createElement("p");
                x.className
                x.innerText = data[user][k];
                filteredData.append(x);
            }
        }
    }
    document.getElementById("userinfo").append(filteredData);
}
function setUser(form){
    for (control of form){
        formdata[control.id]=control.value;
    }
    console.log("Data: ",form,formdata);
    form.reset();
    sessionStorage.setItem("user data: ",JSON.stringify(formdata));
    const request = new XMLHttpRequest();
    request.onload = () => {
        console.log("DATA:", request.responseText)
    };
    request.open("POST", "https://us-central1-qac-sandbox.cloudfunctions.net/setUser");
    request.setRequestHeader("Content-Type","application/json");

    const filteredData={};
    for(let k in formdata){
        if(k){
            filteredData[k]=formdata[k];
        }
    }
    request.send(JSON.stringify(filteredData));
    console.log("sent");
    return false;
}
function loginUser(form){
    const loginDetails = {};

    for (control of form){
        loginDetails[control.id] = control.value;
    }

    sessionStorage.setItem("username: ",JSON.stringify(username));
    
    const request = new XMLHttpRequest();

    request.onload = function(){
        const parsedData = JSON.parse(request.responseText);
        console.log("DATA:", parsedData);
    }
    request.open("GET", `https://us-central1-qac-sandbox.cloudfunctions.net/login?username=${loginDetails.inputUserName}&password=${loginDetails.inputPassword}`);

    request.send();
    console.log("sent");

    return false;
}








function deleteUser(){

    const usernameinfo = sessionStorage.getItem("username: ",JSON.parse(username));

    const request = new XMLHttpRequest();

    request.onload = function(){
        const parsedData = JSON.parse(request.responseText);
        console.log("DATA:", parsedData);
    }
    request.open("DELETE", `https://us-central1-qac-sandbox.cloudfunctions.net/deleteUser?username${loginDetails.usernameinfo}`);

    request.send();
    console.log("sent");
}