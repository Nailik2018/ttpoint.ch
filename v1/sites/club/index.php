<?php require_once "../../../v1/assets/header.php" ?>
    <link rel="stylesheet" href="https://ttpoint.ch/v1/sites/club/index.css">
    <title>Verband</title>

<?php require_once "../../../v1/assets/navigation.php" ?>

    <div class="container-fluid">
        <div class="row" id="distance-to-navigation">
            <div class="col-md-12"></div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h1>Club: <span data-club></span></h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div id="club-informations">
<!--                    <div>Clubname:</div>-->
<!--                    <div>Verband:</div>-->
<!--                    <div>Anzahl Lizenziertespieler:</div>-->
<!--                    <div>Auswertung vom:</div>-->
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <table class='table table-striped'>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Lizenznummer</th>
                            <th scope='col'>Vorname</th>
                            <th scope='col'>Nachname</th>
                            <th scope='col'>Elo (Klass)</th>
                        </tr>
                    </thead>
                    <tbody id="table-body"></tbody>
                </table>
            </div>
        </div>
    </div>

    <script type="text/javascript" src="index.js"></script>
<?php require_once "../../../v1/assets/footer.php" ?>