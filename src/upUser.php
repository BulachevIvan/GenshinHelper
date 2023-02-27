<?php
  session_start();
  require 'configDB.php';
  if ($_SESSION['role'] == 'admin'){
  $id = $_GET['id'];

  $sql = 'UPDATE `users` SET `role` = "moder" WHERE `id` = ?';
  $query = $pdo->prepare($sql);
  $query->execute([$id]);

  header('Location: usersList.php?id='.$_SESSION['id'].'');
}
?>