"use strict";
let output = document.querySelector("div#output");

axios
  .get(
    "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json"
  )
  .then((response) => {
    
    const squadName = document.createElement("p");
    squadName.innerText = "squadName: " + response.data.squadName;
    output.appendChild(squadName);
    
    const homeTown = document.createElement("p");
    homeTown.innerText = "homeTown: " + response.data.homeTown;
    output.appendChild(homeTown);
    
    const formed = document.createElement("p");
    formed.innerText = "formed: " + response.data.formed;
    output.appendChild(formed);
    
    const secretBase = document.createElement("p");
    secretBase.innerText = "secretBase: " + response.data.secretBase;
    output.appendChild(secretBase);
    
    const active = document.createElement("p");
      active.innerText = "active: " + response.data.active;
        output.appendChild(active);

const members = document.createElement("p");
members.innerText = "Members: " + JSON.stringify(response.data.members, null, 4);
output.appendChild(members);

})
.catch(error => console.error(error));