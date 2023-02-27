<?php
  session_start();
  require 'configDB.php';
  if ($_SESSION['role'] == 'admin' || $_SESSION['role'] == 'moder'){
  $id = $_GET['id'];

  $sql = 'DELETE FROM `users` WHERE `id` = ?';
  $query = $pdo->prepare($sql);
  $query->execute([$id]);

  header('Location: usersList.php?id='.$_SESSION['id'].'');
}
?>