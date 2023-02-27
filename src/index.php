<?php
    include("damageCalculate.php");
    session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <link rel="stylesheet" href="css/style.css">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Калькулятор урона</title>
</head>

<body>
    <div class="mainBlock">
        <form method="post">
            <h1>Калькулятор урона</h1>
            <div class="col-left">
            <div class="varLine">
                <input class="normalInput" type="text" name="level" placeholder="Уровень"/>
                <div class="helper">
                    <div class="clue">
                        Введите уровень героя
                    </div>
                </div>
            </div>
            <div class="varLine">
                <input class="normalInput" type="text" name="atk" placeholder="Сила атаки"/>
                <div class="helper">
                <div class="clue">
                        Введите показатель силы атаки героя, с учётом всех имеющихся усилений
                    </div>
                </div>
            </div>
            <div class="varLine">
                <input class="normalInput" type="text" name="EM" placeholder="Мастерство стихий"/>
                <div class="helper">
                <div class="clue">
                        Введите показатель мастерства стихий героя, с учётом всех имеющихся усилеинй
                    </div>
                </div>
            </div>
            <div class="varLine">
                <select name="reaction" id="select_reaction">
                    <option value="0" >Без реакции</option>
                    <option value="1" >Пар (гидро по пиро)</option>
                    <option value="2" >Пар (пиро по гидро)</option>
                    <option value="3" >Таяние (пиро по крио)</option>
                    <option value="4" >Таяние (крио по пиро)</option>
                    <option value="5" >Обострение</option>
                    <option value="6" >Разрастание</option>
                </select>
                <div class="helper">
                <div class="clue">
                        Выберите тип элементальной реакции
                    </div>
                </div>
            </div>
            <div class="varLine">
                <input class="normalInput" type="text" name="reactionBonus" placeholder="Бонус урона реакций"/>
                <div class="helper">
                    <div class="clue">
                        Введите показатель бонуса урона реакций, обычно его можно получить с помощью бонусов полного комплекта артефактов
                    </div></div>
            </div>
            <div class="varLine">
                <input class="normalInput" type="text" name="HP" placeholder="Здоровье"/>
                <div class="helper">
                <div class="clue">
                        Введите здоровье героя, с учётом всех имеющихся усилений
                    </div>
                </div>
            </div>
            <div class="varLine">
                <input class="normalInput" type="text" name="def" placeholder="Защита"/>
                <div class="helper">
                    <div class="clue">
                        Введите показатель защиты героя, с учётом всех имеющихся усилеинй
                    </div></div>
            </div>
            <div class="varLine">
                <details id="scales">
                    <summary>Множители навыков</summary>
                    <input class="inputScale" type="text" name="atkScale" placeholder="Сила атаки %" size="45" />
                    <input class="inputScale" type="text" name="EMScale" placeholder="Мастерство стихий %" size="45" />
                    <input class="inputScale" type="text" name="HPScale" placeholder="Здоровье %" size="45" />
                    <input class="inputScale" type="text" name="defScale" placeholder="Защита %" size="45" />
                </details>
                <div class="helper">
                    <div class="clue">
                        Введите значения множителей урона навыков, указанные в талантах персонажа
                    </div></div>
            </div>
            </div>
            <div class="col-right">
            <div class="varLine">
                <input class="normalInput" type="text" name="afix" placeholder="Бонус урона %"/>
                <div class="helper">
                    <div class="clue">
                        Введите сумму всех бонусов урона (бонус физического/элементального урона, бонус урона способности)
                    </div></div>
            </div>
            <div class="varLine">
                <input class="normalInput" type="text" name="critDMG" placeholder="Крит урон"/>
                <div class="helper">
                    <div class="clue">
                        Введите показатель крит урона, с учётом всех усилений
                    </div></div>
            </div>
            <div class="varLine">
                <input class="normalInput" type="text" name="flatAfix" placeholder="Бонус урона числ."/>
                <div class="helper">
                    <div class="clue">
                        Введите показатель бонусного урона, получаем как % от какого-либо показателя (Например: "Е" Шень Хэ, "Q" Юнь Цзинь)
                    </div></div>
            </div>
            <div class="varLine">
                <input class="normalInput" type="text" name="enemyLevel" placeholder="Уровень врага"/>
                <div class="helper">
                    <div class="clue">
                        Введите уровень врага
                    </div>
                </div>
            </div>
            <div class="varLine">
                <input class="normalInput" type="text" name="res" placeholder="Сопротивление врага"/>
                <div class="helper">
                    <div class="clue">
                        Введите сопротивление врага
                    </div>
                </div>
            </div>
            <div class="varLine">
                <input class="normalInput" type="text" name="resReduction" placeholder="Снижение сопротивления"/>
                <div class="helper">
                    <div class="clue">
                        Введите снижение сопротивления врага (рассеивание элемента, суперпроводник)
                    </div>
                </div>
            </div>
            <div class="varLine">
                <input class="normalInput" type="text" name="defReduction" placeholder="Снижение защиты"/>
                <div class="helper">
                    <div class="clue">
                        Введите снижение защиты (Например, четвёртое созвездие Рейзора)
                    </div>
                </div>
            </div>
            <div class="varLine">
                <input class="normalInput" type="text" name="defIgnore" placeholder="Игнорирование защиты"/>
                <div class="helper">
                    <div class="clue">
                        Введите показатель игнорирования защиты противника (Например, второе созвездие Райдэн)
                    </div>
                </div>
            </div>
            </div>
                <div class="resLine">
                <button type="submit" class="calcBtn" name="damageCalculate">Рассчитать</button>
                <?php
                    echo '<div class="result"><div class="textBoxRes">';
                    echo number_format($damage, 2, ".") ;
                    echo '</div></div>';
                ?>
                </div>
        </form>
    </div>
    <?php
        if (isset($_GET['id']) and $_GET['id'] == $_SESSION['id']){
            echo '<ul class="nav"><li><a href="index.php?id='.$_SESSION['id'];
            echo'">Калькулятор</a></li><li><a href="newsView.php?id='. $_SESSION['id'];
            echo'">Новости</a></li><li><a href="guides.php?id='.$_SESSION['id'];
            echo'">Руководства</a></li><li><a href="builder.php?id='.$_SESSION['id'];
            echo'">Создать руководство</a></li>';
            if ($_SESSION['role'] == 'admin' || $_SESSION['role'] == 'moder'){
                echo '<li><a href="createNews.php?id='.$_SESSION['id'];
                echo'">Создать новость</a></li>';
                echo '<li><a href="usersList.php?id='.$_SESSION['id'];
                echo'">Пользователи</a></li>';
            }
            echo '<li><a href="logout.php">Выход</a></li></ul>';
        }
        else if (!isset($_SESSION['id']) || $_GET['id'] != $_SESSION['id']){
            session_destroy();
            echo'<ul class="nav"><button type"button" id="modalLoginBtn">Войти</button>';
            if ($_GET['emptyError'] == true){echo '<div class="loginError">Ошибка регистрации.<br>Заполните все поля формы регистрации</div>';}
            if ($_GET['regError'] == true){echo '<div class="loginError">Ошибка регистрации.<br>Указанный логин занят</div>';} 
            if ($_GET['failure'] == true){echo '<div class="loginError">Ошибка авторизации.<br>Неверный логин или пароль</div>';}
            echo'</ul>';
            
        }
    ?>
    <div class="loginDialog" id="modalWindow">
        <div class="dialogContent">
            <span class="close">&times;</span>
            <div class="loginContent" id="loginContent">
                <form action="login.php" method="post">
                      <h1>Вход</h1>
                      <label>Логин:</label>
                      <input class="formControl" type="text" name="login" id="login" placeholder="Введите логин">
                      <label>Пароль:</label>
                      <input class="formControl" type="password" name="password" id="password" placeholder="Введите пароль">
                      <button type="submit" class="logBtn">Войти</button>
                </form>
                <button type="button" class="alternativeCont" id="changeToReg">Ещё нет аккаунта?<br>Зарегистрируйтесь!</button>
            </div>
            <div class="regContent" id="regContent">
                <form action="registration.php" method="post">
                      <h1>Регистрация</h1>
                      <label>Логин:</label>
                      <input class="formControl" type="text" name="login" id="login" placeholder="Введите логин">
                      <label>Пароль:</label>
                      <input class="formControl" type="password" name="password" id="password" placeholder="Введите пароль">
                      <button type="submit" class="logBtn">Зарегистрироваться</button>
                </form>
                <button type="button" class="alternativeCont" id="changeToLog">Уже зарегистрированы?<br>Войти!</button>
            </div>
        </div>
    </div>
    <script src="scripts/loginWindow.js"></script>
</body>
</html>