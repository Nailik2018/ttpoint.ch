"use strict";

let baseUrl  = "https://api-ttpoint.ch/api/v1/get-clubs-of-association.php";
let url = window.location.href;

let ajaxUrl = '';

const queryString = window.location.search;
const apiUrl = baseUrl + queryString;
const urlParams = new URLSearchParams(queryString);
const association = urlParams.get('association')

// Abwicklung der Logik startet hier
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        let json = JSON.parse(this.responseText);
        console.log(json);
        getAssociation(association, '[data-association]');
        drawHTML(json, 'data-content-clubs');

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
    let element = document.getElementById(elementId);
    let tableHeader = "<table class='table table-striped'><thead><tr><th scope='col'>#</th><th scope='col'>Clubname</th><th scope='col'>Anzahl Lizenzierte Spieler</th><th scope='col'>Höchster Elowert</th></tr></thead><tbody>"
    let dataHtml = '';

    let i = 1;

    for(let club of jsonData){
        let row = "<tr><th scope='row'>" + i + "</th><td>" + club.clubname + "</td><td>" + club.licencedPlayer + "</td><td> " + club.highestEloOfClubPlayer + "</td></tr>";
        dataHtml += row;
        i++;
    }

    let tableFooter = "</tbody></table>";
    element.innerHTML = tableHeader + dataHtml + tableFooter;
}