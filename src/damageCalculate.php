<?php
$level = (double)$_POST['level'];
$atk = (double)$_POST['atk'];
$EM = (double)$_POST['EM'];
$reaction = (int)$_POST['reaction'];
$reactionBonus = (double)$_POST['reactionBonus'];
$HP = (double)$_POST['HP'];
$def = (double)$_POST['def'];
$atkScale = (double)$_POST['atkScale'];
$critDMG = (double)$_POST['critDMG'];
$EMScale = (double)$_POST['EMScale'];
$HPScale = (double)$_POST['HPScale'];
$defScale = (double)$_POST['defScale'];
$afix = (double)$_POST['afix'];
$flatAfix = (double)$_POST['flatAfix'];
$enemyLevel = (double)$_POST['enemyLevel'];
$res = (double)$_POST['res'];
$resReduction = (double)$_POST['resReduction'];
$defReduction = (double)$_POST['defReduction'];
$defIgnore = (double)$_POST['defIgnore'];

$currRes;
$currReact;
$quickenBonus;

switch ($reaction){
    case 0: 
        $currReact = 1;
        break;
    case 1: 
        $currReact = 2 * (1 + 2.78 * ($EM / (1400 + $EM)) + $reactionBonus / 100);
        break;
    case 2: 
        $currReact = 1.5 * (1 + 2.78 * ($EM / (1400 + $EM)) + $reactionBonus / 100);
        break;
    case 3: 
        $currReact = 2 * (1 + 2.78 * ($EM / (1400 + $EM)) + $reactionBonus / 100);
        break;
    case 4: 
        $currReact = 1.5 * (1 + 2.78 * ($EM / (1400 + $EM)) + $reactionBonus / 100);
        break;
    case 5: 
        $currReact = 1;
        if($level < 10){
            $quickenBonus = 20 * (1 + 5 * ($EM / (1200 + $EM)));
        }
        else if($level >= 10 && $level < 20){
            $quickenBonus = 39 * (1 + 5 * ($EM / (1200 + $EM)));
        }
        else if($level >= 20 && $level < 30){
            $quickenBonus = 93 * (1 + 5 * ($EM / (1200 + $EM)));
        }
        else if($level >= 30 && $level < 40){
            $quickenBonus = 157 * (1 + 5 * ($EM / (1200 + $EM)));
        }
        else if($level >= 40 && $level < 50){
            $quickenBonus = 238 * (1 + 5 * ($EM / (1200 + $EM)));
        }
        else if($level >= 50 && $level < 60){
            $quickenBonus = 372 * (1 + 5 * ($EM / (1200 + $EM)));
        }
        else if($level >= 60 && $level < 70){
            $quickenBonus = 567 * (1 + 5 * ($EM / (1200 + $EM)));
        }
        else if($level >= 70 && $level < 80){
            $quickenBonus = 880 * (1 + 5 * ($EM / (1200 + $EM)));
        }
        else if($level >= 80 && $level < 90){
            $quickenBonus = 1239 * (1 + 5 * ($EM / (1200 + $EM)));
        }
        else if($level = 90){
            $quickenBonus = 1664 * (1 + 5 * ($EM / (1200 + $EM)));
        }
        break;
    case 6: 
        $currReact = 1;
        if($level < 10){
            $quickenBonus = 22 * (1 + 5 * ($EM / (1200 + $EM)));
        }
        else if($level >= 10 && $level < 20){
            $quickenBonus = 43 * (1 + 5 * ($EM / (1200 + $EM)));
        }
        else if($level >= 20 && $level < 30){
            $quickenBonus = 101 * (1 + 5 * ($EM / (1200 + $EM)));
        }
        else if($level >= 30 && $level < 40){
            $quickenBonus = 170 * (1 + 5 * ($EM / (1200 + $EM)));
        }
        else if($level >= 40 && $level < 50){
            $quickenBonus = 259 * (1 + 5 * ($EM / (1200 + $EM)));
        }
        else if($level >= 50 && $level < 60){
            $quickenBonus = 405 * (1 + 5 * ($EM / (1200 + $EM)));
        }
        else if($level >= 60 && $level < 70){
            $quickenBonus = 616 * (1 + 5 * ($EM / (1200 + $EM)));
        }
        else if($level >= 70 && $level < 80){
            $quickenBonus = 957 * (1 + 5 * ($EM / (1200 + $EM)));
        }
        else if($level >= 80 && $level < 90){
            $quickenBonus = 1347 * (1 + 5 * ($EM / (1200 + $EM)));
        }
        else if($level = 90){
            $quickenBonus = 1809 * (1 + 5 * ($EM / (1200 + $EM)));
        }
        break;
}

if ($res - $resReduction < 0){
    $currRes = 1 - ((($res - $resReduction) / 100) / 2);
}
elseif ($res - $resReduction > 0 || $res - $resReduction < 75){
    $currRes = 1 - (($res - $resReduction) / 100);
}
elseif ($res - $resReduction >= 75){
    $currRes = 1 / (4 * (($res - $resReduction) / 100) + 1);
}


$damage;
$damage = (($atk * $atkScale / 100) + ($EM * $EMScale / 100) + ($HP * $HPScale / 100) + ($def * $defScale / 100) + $flatAfix + $quickenBonus) * (1 + ($critDMG / 100)) * 
(1 + ($afix / 100)) * $currRes  * $currReact * ((100 + $level)/((100 + $enemyLevel) * (1 - $defReduction / 100) * (1 - $defIgnore / 100) + (100 + $level)));
?>
