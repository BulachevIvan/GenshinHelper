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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/builderStyle.css">
    <title>Конструктор руководств</title>
</head>
<body>
    <div id="app"></div>
    <form action="saveGuide.php" method="post">
    <input type="hidden" name="creatorId" id="creatorId" value="<?php echo $_GET['id'] ?>">
    <div class="mainBlock">
        <div class="uniterTop">
            <div class="container Left">
                <div class="selectContainer">
                    <button type="button" id="myBtnSingle1" class="selectBtn oneVar" name="charImage">Выберите персонажа</button>
                    <input type="hidden" id="personId" name="personId">
                </div>
                <div class="selectContainer">
                    <button type="button" id="myBtnSingle2" class="selectBtn oneVar">Выберите оружие</button>
                    <input type="hidden" id="weaponId" name="weaponId">
                </div>
            </div>
            <div class="container Right">
                <div>
                <input type="text" name="guideTitle" id="guideTitle" class="textArea Title" placeholder="Введите название руководства"/>
                </div>
                <div>
                <textarea type="text" name="guideContent" id="contentTitle" class="textArea Content" placeholder="Введите текст руководства" maxlength="10000"></textarea>
                </div>
            </div>
        </div>
            <div class="uniterBot">
                <div class="bottomLeft">
                        <button type="button" id="myBtnMultiple1" class="selectBtn multiVar">Выберите артефакты</button>
                        <input type="hidden" id="artifaсtId" name="art">
                        <input type="hidden" id="artifaсtId2" name="art2">
                        <input type="hidden" id="artifaсtId3" name="art3">
                        <span id="selectedMultipleVariables1" class="currSelected multi"></span>
                </div>
                <div class="bottomRight">
                        <button type="submit" name="saveGuide" class="selectBtn Save" onclick="saveError()">Сохранить</button>
                </div>
            </div>
        </div>
        </form>

    <!-- Single Modal 1 -->
        <div id="myModalSingle1" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
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

    <!-- Single Modal 2 -->
        <div id="myModalSingle2" class="modal">
            <div class="modal-content">
            <span class="close">&times;</span>
            <div class="filterLine">
                <div class="filtres">
                    <button type="button" class="filterAllBtn"
                    onclick="toggleVisibilityWeapon('sword', 'spear', 'claymore', 'bow', 'book');">Выбрать всё</button><br>
                    <button type="button" class="elementBtn"
                    onclick="toggleVisibilityWeapon('sword');"><img src="css/images/weapons/4star/Weapon_Favonius_Sword_3D.png" width="35" height="35"/></button><br>
                    <button type="button" class="elementBtn"
                    onclick="toggleVisibilityWeapon('spear');"><img src="css/images/weapons/4star/Weapon_Favonius_Lance_3D.png" width="35" height="35"/></button><br>
                    <button type="button" class="elementBtn"
                    onclick="toggleVisibilityWeapon('claymore');"><img src="css/images/weapons/4star/Weapon_Favonius_Greatsword_3D.png" width="35" height="35"/></button><br>
                    <button type="button" class="elementBtn"
                    onclick="toggleVisibilityWeapon('bow');"><img src="css/images/weapons/4star/Weapon_Favonius_Warbow_3D.png" width="35" height="35"/></button><br>
                    <button type="button" class="elementBtn"
                    onclick="toggleVisibilityWeapon('book');"><img src="css/images/weapons/4star/Favonius_Codex_3D_A1.png" width="35" height="35"/></button><br>
                    
                </div>
            </div>
                <div class="buttonList" id="weaponList">
                
                </div>
            </div>
        </div>

    <!-- Multiple Modal 1 -->
        <div id="myModalMultiple1" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <div class="buttonList" id="artifactList">
                </div>
            </div>
        </div>

    <!-- Multiple Modal 2 -->
        
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
    <script src="scripts/artifact_init.js"></script>
    <script src="scripts/hero_init.js"></script>
    <script src="scripts/weapon_init.js"></script>
    <script src="scripts/select.js"></script>
    <script src="scripts/filter.js"></script>
</body>
</html>