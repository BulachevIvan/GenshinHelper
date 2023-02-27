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
    <link rel="stylesheet" href="css/usersStyle.css">
    <title>Пользователи</title>
</head>
<body>
<div class="mainBlock" id="mainBlock">
    <div class="filter_line">
        <div class="filtreGuideButtonLine">
            <?php
                require 'configDB.php';
                $allUsers = [];
                $admUsers = [];
                $allCount = 0;
                $admCount = 0;
                $sql = 'SELECT * FROM `users`';
                $query = $pdo->query($sql);
                while ($row = $query->fetch(PDO::FETCH_OBJ)) {
                    $allUsers[$allCount] = $row->id;
                    $allCount++;
                    if('moder' == $row->role || 'admin' == $row->role){
                        $admUsers[$admCount] = $row->id;
                        $admCount++;
                    }
                }

                $all_un = array_unique($allUsers);
                $all_str = implode(",", $all_un);
                $adm_un = array_unique($admUsers);
                $adm_str = implode(",", $adm_un);
            ?>
            <button type="button" class="filtreGuideButton" onclick='toggleVisibilityGuides(<?php echo json_encode($all_str);?>)'><div class="textDiv">Все пользователи</div></button>
            <button type="button" class="filtreGuideButton" onclick='toggleVisibilityGuides(<?php echo json_encode($adm_str);?>)'><div class="textDiv">Администрация</div></button>
        </div>
    </div>
    <div class="container">
        <div class="userList">
            <?php
                require 'configDB.php';
                $sql = 'SELECT * FROM `users`';
                $query = $pdo->query($sql);
                while ($row = $query->fetch(PDO::FETCH_OBJ)) {
                    echo'<div class="user" id="'.$row->id.'">
                        <div class="userName">'. $row->login . '</div>';
                        if ($_SESSION['role'] == 'admin'){
                            if ($row->role != 'admin'){
                                echo '<a href="deleteUser.php?id='.$row->id.'" class="imgBtn delImg"></a>';
                            }
                            if($row->role == 'user'){
                                echo '<a href="upUser.php?id='.$row->id.'" class="imgBtn upImg"></a>';
                            }
                            if($row->role == 'moder'){
                                echo '<a href="downUser.php?id='.$row->id.'" class="imgBtn downImg"></a>';
                            }
                        }
                        if ($_SESSION['role'] == 'moder' && $row->role == 'user'){
                            echo '<a href="deleteUser.php?id='.$row->id.'" class="imgBtn delImg"></a>';
                        }
                    echo '</div>';
            }
            ?>
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
    <script src="scripts/usersFilter.js"></script>
</body>
</html>