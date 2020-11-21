let baseUrl  = "https://api-ttpoint.ch/api/v1/get-club.php";
let url = window.location.href;

let ajaxUrl = '';

const queryString = window.location.search;
const apiUrl = baseUrl + queryString;
const urlParams = new URLSearchParams(queryString);
const clubname = urlParams.get('clubname')

// Abwicklung der Logik startet hier
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        let json = JSON.parse(this.responseText);
        console.log(json);
        getClubname(json.clubname, '[data-club]');
        drawClubInformationHTML(json, 'club-informations');
        drawClubPlayers(json['players'], 'table-body');

    }
};

xhttp.open("GET", apiUrl, true);
xhttp.send();

function getClubname(clubname, dataAttribute){
    let element = document.querySelector(dataAttribute);
    let output = clubname;
    element.innerText = clubname;
}

function drawClubInformationHTML(data, elementId){
    let element = document.getElementById(elementId);
    element.innerHTML += "<div>Clubname: " + data.clubname + "</div><div>Verband: " + data.association_fullname + "</div><div>Anzahl Lizenziertespieler: " + data.licensedPlayers + "</div><div>Auswertung vom: " + data.month + "." + data.year + "</div>";
}

function drawClubPlayers(data, elementId){
    let i = 1;

    let tableBody = document.getElementById(elementId);

    for(let player of data){

        let tr = document.createElement("tr");
        tr.onclick = function() { selectedClub(club.clubname); };

        let count = document.createElement("td");
        let licenceNr = document.createElement("td");
        let firstname = document.createElement("td");
        let lastname = document.createElement("td");
        let elo = document.createElement("td");

        count.innerText = i;
        licenceNr.innerText = player.licenceNr;
        firstname.innerText = player.firstname;
        lastname.innerText = player.lastname;
        elo.innerText = player.currentElo + " (" + player.currentClassment + ")";

        tr.appendChild(count);
        tr.appendChild(licenceNr);
        tr.appendChild(firstname);
        tr.appendChild(lastname);
        tr.appendChild(elo);

        tableBody.appendChild(tr);

        i++;
    }
}