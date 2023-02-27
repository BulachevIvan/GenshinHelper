<?php
  session_start();
  require 'configDB.php';

  $id = $_GET['id'];

  $sql = 'DELETE FROM `news` WHERE `id` = ?';
  $query = $pdo->prepare($sql);
  $query->execute([$id]);

  header('Location: newsView.php?id='.$_SESSION['id'].'')
?>
