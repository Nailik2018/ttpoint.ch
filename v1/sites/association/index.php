<?php require_once "../../../v1/assets/header.php" ?>
    <link rel="stylesheet" href="https://ttpoint.ch/v1/sites/association/index.css">
    <title>Verband</title>

<?php require_once "../../../v1/assets/navigation.php" ?>

<div class="container-fluid">
    <div class="row" id="distance-to-navigation">
        <div class="col-md-12"></div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <h1>Vereine aus dem Verband: <span data-association></span></h1>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <table class='table table-striped'>
                <thead><tr><th scope='col'>#</th><th scope='col'>Clubname</th><th scope='col'>Lizenzierte Spieler</th></tr></thead>
                <tbody id="table-body"></tbody>
            </table>
        </div>
    </div>
</div>

<script type="text/javascript" src="index.js"></script>
<?php require_once "../../../v1/assets/footer.php" ?>

