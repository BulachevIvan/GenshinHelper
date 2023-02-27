<?php
    session_start();
    if (!isset($_GET['id']) || $_SESSION['id'] != $_GET['id']){
        session_destroy();
    header('Location: index.php');
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=\, initial-scale=1.0">
    <link rel="stylesheet" href="css/guidesStyle.css">
    <title>Руководства</title>
</head>
<body onload="displayGuideButton(), displayModal()">
    <div class="mainBlock" id="mainBlock">
        <?php
                require 'configDB.php';
                $vars = [];
                $myGuides = [];
                $admGuides = [];
                $count = 0;
                $myGuidesCount = 0;
                $admGuidesCount = 0;
                $sql = 'SELECT * FROM `users`';
                $query = $pdo->query($sql);
                while ($row = $query->fetch(PDO::FETCH_OBJ)) {
                    $vars[$count] = $row->id;
                    $count++;
                    if($row->id == $_GET['id']){
                        $myGuides[$myGuidesCount] = $row->id;
                        $myGuidesCount++;
                    }
                    if('admin' == $row->role){
                        $admGuides[$admGuidesCount] = $row->id;
                        $admGuidesCount++;
                    }
                }

                $vars_un = array_unique($vars);
                $vars_str = implode(",", $vars_un);
                $myGuides_un = array_unique($myGuides);
                $myGuides_str = implode(",", $myGuides_un);
                $admGuides_un = array_unique($admGuides);
                $admGuides_str = implode(",", $admGuides_un);
            ?>
        <div class="filter_line">
            <div class="filtreGuideButtonLine">
            <button type="button" class="filtreGuideButton" onclick='toggleVisibilityGuides(<?php echo json_encode($vars_str);?>)'><div class="textDiv">Все руководства</div></button>
            <button type="button" class="filtreGuideButton" onclick='toggleVisibilityGuides(<?php echo json_encode($admGuides_str)?>)'><div class="textDiv over">Руководства от администрации</div></button>
            <button type="button" class="filtreGuideButton" onclick='toggleVisibilityGuides(<?php echo json_encode($myGuides_str)?>)'><div class="textDiv">Мои руководства</div></button>
            <button type="button" class="filterImgButton" id="filterImgButton"><img src="css/images/filter.png"/></button>
            </div>
        </div>
        <div class="container">
        <div class="guideList">
            <?php
                require 'configDB.php';
                $sql = 'SELECT * FROM `guides`';
                $query = $pdo->query($sql);
                while ($row = $query->fetch(PDO::FETCH_OBJ)) {
                echo'<button class="guideButton">
                <div class="guideId" id="guideId">'.$row->id.'</div>
                <div class="hiddenVar" id="hiddenVar">'.$row->personId.'</div>
                <div class="hiddenCreatorId" id="hiddenCreatorId">'.$row->creatorId.'</div>
                <div class="hiddenVarWeapon" id="hiddenVarWeapon">'.$row->weaponId.'</div>
                <div class="hiddenVarArt" id="hiddenVarArt">'.$row->art.'</div>
                <div class="hiddenVarArt2" id="hiddenVarArt">'.$row->art2.'</div>
                <div class="hiddenVarArt3" id="hiddenVarArt">'.$row->art3.'</div>
                <div class="hiddenTitle">'.$row->guideTitle.'</div>
                <div class="hiddenContent">'.$row->guideContent.'</div>
                <div class="hiddenRole">'.$_SESSION['role'].'</div>
                <div class="currId">'.$_GET['id'].'</div>
                </button>';
            }
            ?>
        </div>
        </div>
        <div id="heroesFilterModal" class="modal">
            <div class="modal-content">
                <span class="close" id="filterSpan">&times;</span>
                <div class="filterLine">
                    <div class="filtres">
                        <button type="button" class="filterAllBtn"
                        onclick="toggleVisibility('hydro', 'pyro', 'geo', 'anemo', 'cryo', 'electro', 'dendro');">Выбрать всё</button>
                        <button type="button" class="elementBtn"
                        onclick="toggleVisibility('electro');"><img src="css/images/elements/electro.png" width="35" height="35"/></button>
                        <button type="button" class="elementBtn"
                        onclick="toggleVisibility('dendro');"><img src="css/images/elements/dendro.png" width="35" height="35"/></button>
                        <button type="button" class="elementBtn"
                        onclick="toggleVisibility('pyro');"><img src="css/images/elements/pyro.png" width="35" height="35"/></button>
                        <button type="button" class="elementBtn"
                        onclick="toggleVisibility('geo');"><img src="css/images/elements/geo.png" width="35" height="35"/></button>
                        <button type="button" class="elementBtn"
                        onclick="toggleVisibility('anemo');"><img src="css/images/elements/anemo.png" width="35" height="35"/></button>
                        <button type="button" class="elementBtn"
                        onclick="toggleVisibility('cryo');"><img src="css/images/elements/cryo.png" width="35" height="35"/></button>
                        <button type="button" class="elementBtn"
                        onclick="toggleVisibility('hydro');"><img src="css/images/elements/hydro.png" width="35" height="35"/></button>
                    </div>
                </div>
                <div class="buttonList" id="heroesList">

                    </div>
            </div>
        </div>
    </div>
    <ul class="nav">
        <li><a href="index.php?id=<?php echo $_SESSION['id'];?>">Калькулятор</a></li>
        <li><a href="newsView.php?id=<?php echo $_SESSION['id'];?>">Новости</a></li>
        <li><a href="guides.php?id=<?php echo $_SESSION['id'];?>">Руководства</a></li>
        <li><a href="builder.php?id=<?php echo $_SESSION['id'];?>">Создать руководство</a></li>
        <?php 
            if ($_SESSION['role'] == 'admin' || $_SESSION['role'] == 'moder'){
                echo '<li><a href="createNews.php?id='.$_SESSION['id'];
                echo'">Создать новость</a></li>';
                echo '<li><a href="usersList.php?id='.$_SESSION['id'];
                echo'">Пользователи</a></li>';
            }
        ?>
        <li><a href="logout.php">Выход</a></li>
    </ul>
    <script src="scripts/filtreGuides.js"></script>
    <script src="scripts/hero_init.js"></script>
    <script src="scripts/weapon_init.js"></script>
    <script src="scripts/artifact_init.js"></script>
    <script src="scripts/filterHeroesModal.js"></script>
    <script src="scripts/displayGuide.js"></script>
</body>
</html>