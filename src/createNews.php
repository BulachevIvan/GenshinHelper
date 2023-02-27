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
    <link rel="stylesheet" href="css/createNewsStyle.css">
    <title>Конструктор новостей</title>
</head>
<body>
    <div class="mainBlock" id="mainBlock">
    <form action="saveNews.php" method="post" enctype="multipart/form-data">
        <input type="text" name="newsTitle" id="newsTitle" class="textArea Title" placeholder="Введите заголовок новости"/>
        <textarea type="text" name="newsContent" id="newsContent" class="textArea Content" placeholder="Введите текст новости" maxlength="10000"></textarea>
        <div class="bottomLine">
            <input type="file" class="upload-box" name="news_img_upload">
            <button type="submit" name="saveNews" class="saveBtn" onclick="saveError()">Сохранить новость</button>
        </div>
    </form>
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
    <script>
        function saveError(){
        let title = document.getElementById('newsTitle');
        let content = document.getElementById('newsContent');
        if (title.value == "" || content.value == ""){
            alert("Заполните все текстовые поля!");
        }
    }
    </script>
</body>
</html>