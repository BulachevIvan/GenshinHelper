<?php
  $login = $_POST['login'];
  $password = $_POST['password'];

  require 'configDB.php';

  $sql = 'SELECT * FROM `users` WHERE login = :login';
  $query = $pdo->prepare($sql);
  $query->execute(['login' => $login]);
  if ($query->rowCount() > 0){
      $row = $query->fetch(PDO::FETCH_OBJ);
      $password_hash = $row->password_hash;
      if (password_verify($password, $password_hash)){
        session_start();
        $_SESSION['id'] = $row->id;
        $_SESSION['role'] = $row->role;
        header('Location: index.php?id=' . $_SESSION['id']);
      }
      else header('Location: index.php?failure=true');
  }
  else {
    header('Location: index.php?failure=true');
  }

?>