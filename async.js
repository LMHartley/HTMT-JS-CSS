function fetchSuperHeroes(superhero){
    const request = new XMLHttpRequest();

    request.onload = function(){
        const parsedData = JSON.parse(request.responseText);
        console.log("DATA:", parsedData);
        //displaySuperheroData(parsedData);
        displayMembers(parsedData,superhero);
        displayData(parsedData);
    }
    request.open("GET", "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json");

    request.send();
    console.log("sent");
}
function fetchSquad(){
    const request = new XMLHttpRequest();

    request.onload = function(){
        const parsedData = JSON.parse(request.responseText);
        console.log("DATA:", parsedData);
        //displaySuperheroData(parsedData);
        displayData(parsedData);
    }
    request.open("GET", "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json");

    request.send();
    console.log("sent");
}

function displayData(data){
    console.log('display data!', data);
    document.getElementById('squadNameElement').innerText = ("Squad Name: "+data.squadName);
    document.getElementById('homeTownElement').innerText = ("Home Town: "+data.homeTown);
    document.getElementById('formedElement').innerText = ("Date Formed: "+data.formed);
    document.getElementById('secretBaseElement').innerText = ("Secret Base: "+data.secretBase);
    document.getElementById('activeElement').innerText = ("Active: "+data.active);
}

function displayMembers(data,superhero){
    const memberContainer = document.createElement("div");
    for(let member of data.members){
        if(member.name == superhero){
        const element = document.createElement("h2");
        element.innerText = member.name;
        element.className = "memberClass";
        memberContainer.append(element);
        }
        if(member.name == superhero){
            for(let power of member.powers){
                const abilities = document.createElement("p");
                abilities.innerText = power+(" ");
                memberContainer.append(abilities);
            }
        }
        if(member.name == superhero){
            const age = document.createElement("p");
            age.innerText=("Age: "+member.age);
            memberContainer.append(age);
        }
        if(member.name == superhero){
            const identity = document.createElement("p");
            identity.innerText = ("Secret Identity: "+member.secretIdentity);
            memberContainer.append(identity);
        }

        document.getElementById("membersElement").append(memberContainer);
    }
}

// function generateMember(member,id){
//     const memberWrapper = document.createElement('div');
//     memberWrapper.id = id;
//     memberWrapper.className = "memberWrapper";

//     const title = document.createElement("h2");
//     title.innerText = member.name;
//     Element.innerText =parsedData.squadName;
//     memberWrapper.append(title);

//     const powers = document.createElement("P");
//     powers.innerText = member.powers.join(", ");
//     memberWrapper.append(powers);


//     return memberWrapper;
// }

function mmload(){
    window.location="mm.html";
}
function muload(){
    window.location="mu.html";
}
function efload(){
    window.location="ef.html";
}
function bmload(){
    window.location="bm.html";
}
function shsload(){
    window.location="shs.html";
}
