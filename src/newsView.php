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
    <link rel="stylesheet" href="css/newsViewStyle.css">
    <title>Новости</title>
</head>
<body onload="displayNewsButton(), newsModal()">
    <div class="mainBlock" id="mainBlock">
    <div class="newsList">
    <?php
        require 'configDB.php';
        $sql = 'SELECT * FROM `news` ORDER BY id DESC';
        $query = $pdo->query($sql);
        while ($row = $query->fetch(PDO::FETCH_OBJ)) {
            echo '<button class="newsButton">
            <div class="hiddenVar">'.$_SESSION['role'].'</div>
            <div class="hiddenVar">'.$row->newsContent.'</div>
            <div class="newsTitle">'.$row->newsTitle.'</div>
            <img class="newsImg" src="data:image/jpeg;base64,' . base64_encode($row->newsImg) . '" alt=""/>
            <div class="hiddenVar">'.$row->id.'</div>
            </button>';
        } ?>
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
    <script src="scripts/displayNews.js"></script>
</body>
</html>