"use strict";

let baseUrl  = "https://api-ttpoint.ch/api/v1/ranking.php";
let url = window.location.href;
let gender = url.split("?");
let AJAXMETHOD = "GET";

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
        printRanking(json);
    }
};

xhttp.open("GET", ajaxUrl, true);
xhttp.send();

function printRanking(data){
    console.log(data);
}