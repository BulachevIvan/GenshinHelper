<?php
  session_start();
  require 'configDB.php';

  $id = $_GET['id'];

  $sql = 'DELETE FROM `guides` WHERE `id` = ?';
  $query = $pdo->prepare($sql);
  $query->execute([$id]);

  header('Location: guides.php?id='.$_SESSION['id'].'')
?>
