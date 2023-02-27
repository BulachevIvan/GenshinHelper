<?php
    session_start();
    require 'configDB.php';
    $newsTitle = $_POST['newsTitle'];
    $newsContent = $_POST['newsContent'];

    if(!isset($newsTitle) || $newsTitle =='' || !isset($newsContent) || $newsContent ==''){
        header('Location: createNews.php?id='.$_SESSION['id'].'');   
        exit();
    }
    else if($_FILES['news_img_upload']['error'] == 4){
        $sql = 'INSERT INTO news(authorId, newsTitle, newsContent) VALUES(:authorId, :newsTitle, :newsContent)';
        $query = $pdo->prepare($sql);
        $query->execute(['authorId' => $_SESSION['id'], 'newsTitle' => $newsTitle, 'newsContent' => $newsContent]);

        header('Location: newsView.php?id='.$_SESSION['id'].'');
    }
    else{
        $newsImg = file_get_contents($_FILES['news_img_upload']['tmp_name']);
        $sql = 'INSERT INTO news(authorId, newsTitle, newsContent, newsImg) VALUES(:authorId, :newsTitle, :newsContent, :newsImg)';
        $query = $pdo->prepare($sql);
        $query->execute(['authorId' => $_SESSION['id'], 'newsTitle' => $newsTitle, 'newsContent' => $newsContent, 'newsImg' => $newsImg]);

    header('Location: newsView.php?id='.$_SESSION['id'].'');
    }
?>