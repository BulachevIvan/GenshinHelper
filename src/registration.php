<?php
  require 'configDB.php';
  $login = $_POST['login'];
  $password = $_POST['password'];

  if (!isset($login) || $login == '' || !isset($password) || $password == ''){
    header('Location: index.php?emptyError=true');
    exit;
  }
  $sql = 'SELECT* FROM `users`';
  $query = $pdo->prepare($sql);
  $query = $pdo->query($sql);
      while ($row = $query->fetch(PDO::FETCH_OBJ)) {
            if ($row->login == $login){
                header('Location: index.php?regError=true');
                exit;
            }
          }

  $sql = 'INSERT INTO users(login, password_hash, role) VALUES(:login, :password_hash, :role)';
  $query = $pdo->prepare($sql);
  $query->execute(['login' => $login, 'password_hash' => password_hash($password, PASSWORD_DEFAULT), 'role' => 'user']);

  header('Location: index.php');
?>