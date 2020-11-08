"use strict";

let baseUrl  = "https://api-ttpoint.ch/api/v1/ranking.php";
let url = window.location.href;
let gender = url.split("?");
let AJAXMETHOD = "GET";
let ELEMENTID = "ranking";

let ajaxUrl = '';

if(gender[1] != undefined){
    ajaxUrl = baseUrl + "?" + gender[1];
}else{
    ajaxUrl = baseUrl;
}

// Abwicklung der Logik startet hier
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        let json = JSON.parse(this.response);
        printRanking(json, ELEMENTID);
    }
};

xhttp.open("GET", ajaxUrl, true);
xhttp.send();

function printRanking(data, id){

    let element = document.getElementById(id);

    let htmlStructur = '';
    let lastIndex = data.length;
    console.log(element);
    for(let d of data){
        let firstname = d['firstname'];
        let lastname = d['lastname'];
        let association = d['association'];
        let clubname = d['clubname'];
        let gender = d['gender'];
        let ranking = parseInt(d['ranking']);
        let elo = parseInt(d['elo']);

        let html = '';

        if(ranking == lastIndex){
            // html = "<div class='row'><div class='col-md-12'><div class='card' id='redLight'><div class='ranking-number-wrapper'><div class='ranking-number'>" + ranking + "</div></div><div class='player-informations'><div class='player-name'>" + firstname + " " + lastname + "</div><div class='player-club'>" + clubname + " " + elosToClassment(elo) + "</div></div><div class='player-association'>" + association + "</div><div class='player-elos'>" + elo + "</div></div></div></div>";
            html = "<div class='row'><div class='col-md-12'><div class='card' id='redLight'><div class='ranking-number-wrapper'><div class='ranking-number'>" + ranking + "</div></div><div class='player-informations'><div class='player-name'>" + firstname + " " + lastname + "</div><div class='player-club'>" + clubname + "</div></div><div class='player-association'>" + association + "</div><div class='player-elos'>" + elo + "</div></div></div></div>";
        }else{
            // html = "<div class='row'><div class='col-md-12'><div class='card' id='number-" + ranking + "'><div class='ranking-number-wrapper'><div class='ranking-number'>" + ranking + "</div></div><div class='player-informations'><div class='player-name'>" + firstname + " " + lastname + "</div><div class='player-club'>" + clubname + " " + elosToClassment(elo) + "</div></div><div class='player-association'>" + association + "</div><div class='player-elos'>" + elo + "</div></div></div></div>";
            html = "<div class='row'><div class='col-md-12'><div class='card' id='number-" + ranking + "'><div class='ranking-number-wrapper'><div class='ranking-number'>" + ranking + "</div></div><div class='player-informations'><div class='player-name'>" + firstname + " " + lastname + "</div><div class='player-club'>" + clubname +"</div></div><div class='player-association'>" + association + "</div><div class='player-elos'>" + elo + "</div></div></div></div>";
        }


        htmlStructur += html;
        console.log(d);
        console.log("-----");
    }
    console.log(lastIndex);

    element.innerHTML = htmlStructur;
    console.log(data);
}