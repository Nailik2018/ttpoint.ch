"use strict";

let baseUrl  = "https://api-ttpoint.ch/api/v1/get-clubs-of-association.php";
let url = window.location.href;

let ajaxUrl = '';

const queryString = window.location.search;
const apiUrl = baseUrl + queryString;
const urlParams = new URLSearchParams(queryString);
const association = urlParams.get('association');

// Abwicklung der Logik startet hier
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        let json = JSON.parse(this.responseText);
        console.log(json);
        getAssociation(association, '[data-association]');
        // drawHTML(json, 'data-content-clubs');
        drawHTML(json, 'table-body');

    }
};

xhttp.open("GET", apiUrl, true);
xhttp.send();

function getAssociation(association, dataAttribute){
    let element = document.querySelector(dataAttribute);
    let output = association;
    element.innerText = association.toUpperCase();
}

function drawHTML(jsonData, elementId){

    let i = 1;

    let tableBody = document.getElementById(elementId);

    for(let club of jsonData){

        let tr = document.createElement("tr");
        tr.onclick = function() { selectedClub(club.clubname); };

        let count = document.createElement("td");
        let clubname = document.createElement("td");
        let licencedPlayer = document.createElement("td");

        count.innerText = i;
        clubname.innerText = club.clubname;
        licencedPlayer.innerText = club.licencedPlayer;

        tr.appendChild(count);
        tr.appendChild(clubname);
        tr.appendChild(licencedPlayer);

        tableBody.appendChild(tr);

        i++;
    }
}

function selectedClub(clubname) {
    window.location.href='https://ttpoint.ch/v1/sites/club/index.php?clubname=' + clubname + '';
}