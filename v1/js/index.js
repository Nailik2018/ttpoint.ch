var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api-ttpoint.ch/api/v1/get-all-associations.php', true);
xhr.send();

xhr.onload = function () {
    var done = 4;
    var ok = 200;
    if (xhr.readyState == done && xhr.status == ok){
        let json = JSON.parse(this.responseText);
        console.log(json);
        // createAssociations(json, "associations");
        // createPlayersOverviewTable(playerdata);
    }else{
        console.log('Error: Status ' + xhr.status);
        console.log('Error: readyState ' + xhr.readyState);
    }
}

function createAssociations(data, elementId){

    let element = document.getElementById(elementId);
    let countedData = data.length;
    let rowData = 3;

    let i = 0;

    element.innerHTML += "<div class='row'><div class='col-md-12'><h1>Tischtennis Verbände</h1></div></div>";

    for(let j = 0; j < rowData; j++){
        let temp = i;
        let first = temp;
        let second = temp + 1;
        let last = temp + 2;
        console.log(first);
        console.log(second);
        console.log(last);

        element.innerHTML += "<div class='row'><div class='col-md-4'><div class='card'><div class='card-body'><h5 class='card-title'>" + data[first]['association'] + "</h5></div></div></div><div class='col-md-4'><div class='card'><div class='card-body'><h5 class='card-title'>" + data[second]['association'] + "</h5></div></div></div><div class='col-md-4'><div class='card'><div class='card-body'><h5 class='card-title'>" + data[last]['association'] + "</h5></div></div></div></div>";
        i += 3
    }
    // console.log(data.length);

    // element.innerHTML += "<div class='row'><div class='col-md-12'><h1>Tischtennis Verbände</h1></div></div>";
    // element.innerHTML += "<div class='row'><div class='col-md-4'><div class='card'><div class='card-body'><h5 class='card-title'>NWTTV</h5></div></div></div><div class='col-md-4'><div class='card'><div class='card-body'><h5 class='card-title'>OTTV</h5></div></div></div><div class='col-md-4'><div class='card'><div class='card-body'><h5 class='card-title'>TTVI</h5></div></div></div></div>";
}

function createPlayersOverviewTable(jsonData) {

    let tableBody = document.getElementById("players-data");

    for(let i = 0; i < jsonData.length; i++){

        if(jsonData[i]['kader'] == 0){

        }else{
            let tr = document.createElement("tr");

            tr.onclick = function() { selectetPlayer(jsonData[i]['licenceNr']); };

            let licenceNr = document.createElement("td");
            let firstname = document.createElement("td");
            let lastname = document.createElement("td");

            licenceNr.innerText = jsonData[i]['licenceNr'];
            firstname.innerText = jsonData[i]['firstname'];
            lastname.innerText = jsonData[i]['lastname'];

            tr.appendChild(licenceNr);
            tr.appendChild(firstname);
            tr.appendChild(lastname);

            tableBody.appendChild(tr);
        }
    }
}

function selectetPlayer(licenceNr) {
    window.location.href='spieler.php?licence=' + licenceNr + '';
}