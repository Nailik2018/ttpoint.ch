<?php require_once "./v1/assets/header.php" ?>
    <link rel="stylesheet" href="/v1/css/index.css">
    <title>Startseite ttpoint.ch</title>
<?php require_once "./v1/assets/navigation.php" ?>

<!--    <div class="container" id="ttpoint-content-associations"">-->
<!--        <div class="row">-->
<!--            <div class="col-lg-12">-->
<!---->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->

<div class="container">
    <div class="row" id="ttpoint-content-associations">
        <div class="col-md-12"></div>
    </div>

    <div class="row">
        <div class="col-md-12">
            <h1>Tischtennis Verbände</h1>
        </div>
    </div>

    <div class="row">
        <div class="col-md-4">
            <div class="card association-swiss">
                <div class="card-body">
                    <h5 class="card-title">STTV</h5>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">AGTT</h5>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">ANJTT</h5>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12">
            <br>
        </div>
    </div>

    <div class="row">
        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">ATTT</h5>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <!--    <div class="card" (click)="changeToSite($event);">-->
            <a href="association">
                <div class="card" routerLink="/association">

                    <div class="card-body">
                        <h5 class="card-title">AVVF</h5>
                    </div>


                </div>
            </a>
        </div>
        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">MTTV</h5>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12">
            <br>
        </div>
    </div>

    <div class="row">
        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">NWTTV</h5>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">OTTV</h5>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">TTVI</h5>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12">
            <br>
        </div>
    </div>
</div>

    <script type="text/javascript" src="v1/js/index.js"></script>

<?php require_once "./v1/assets/footer.php" ?>