<?php
    require 'configDB.php';
    $creatorId = (int)$_POST['creatorId'];
    $personId = (int)$_POST['personId'];
    $weaponId = (int)$_POST['weaponId'];
    $art = (int)$_POST['art'];
    $art2 = (int)$_POST['art2'];
    $art3 = (int)$_POST['art3'];
    $guideTitle = $_POST['guideTitle'];
    $guideContent = $_POST['guideContent'];

    if(!isset($personId) || $personId == 0 || !isset($creatorId) || $creatorId == 0 || !isset($weaponId) || $weaponId == 0 || !isset($art) || $art == 0 || !isset($guideTitle) || $guideTitle == '' || !isset($guideContent) || $guideContent == ''){
        header('Location: builder.php?id='.$creatorId);   
        exit();
    }

    else if($art2 == 0){
        $sql = 'INSERT INTO guides(personId, creatorId, weaponId, art, guideTitle, guideContent) VALUES(:personId, :creatorId, :weaponId, :art, :guideTitle, :guideContent)';
        $query = $pdo->prepare($sql);
        $query->execute(['personId' => $personId, 'creatorId' => $creatorId, 'weaponId' => $weaponId, 'art' => $art, 'guideTitle' => $guideTitle, 'guideContent' => $guideContent]);
        }
    
    else if($art3 == 0){
        $sql = 'INSERT INTO guides(personId, creatorId, weaponId, art, art2, guideTitle, guideContent) VALUES(:personId, :creatorId, :weaponId, :art, :art2, :guideTitle, :guideContent)';
        $query = $pdo->prepare($sql);
        $query->execute(['personId' => $personId, 'creatorId' => $creatorId, 'weaponId' => $weaponId, 'art' => $art, 'art2' => $art2, 'guideTitle' => $guideTitle, 'guideContent' => $guideContent]);
        }
    else{
        $sql = 'INSERT INTO guides(personId, creatorId, weaponId, art, art2, art3, guideTitle, guideContent) VALUES(:personId, :creatorId, :weaponId, :art, :art2, :art3, :guideTitle, :guideContent)';
        $query = $pdo->prepare($sql);
        $query->execute(['personId' => $personId, 'creatorId' => $creatorId, 'weaponId' => $weaponId, 'art' => $art, 'art2' => $art2, 'art3' => $art3, 'guideTitle' => $guideTitle, 'guideContent' => $guideContent]);
    
    }

    header("Location: guides.php?id=".$creatorId);
?>