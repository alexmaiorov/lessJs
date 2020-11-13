<?php
    // №1
    // $a = -5;
	// $b = 3;
	// if ($a >=0 && $b >= 0) {
    //     echo 'Разность чисел равна: '.($a - $b);
	// } elseif ($a < 0 && $b < 0) {
    //     echo 'Произведение чисел равно: '.($a * $b);
	// } elseif (($a >= 0 && $b < 0) || ($a < 0 && $b >= 0)) {
    //     echo 'Сумма чисел равна: '.($a + $b);
    // }

    // №2
    // $a = 8;
	// switch ($a) {
    // case 1:
    //     echo "1";
    // case 2:
    //     echo "2";
    // case 3:
    //     echo "3";
    // case 4:
    //     echo "4";
    // case 5:
    //     echo "5";
    // case 6:
    //     echo "6";
    // case 7:
    //     echo "7";
    // case 8:
    //     echo "8";
    // case 9:
    //     echo "9";
    // case 10:
    //     echo "10";
    // case 11:
    //     echo "11";
    // case 12:
    //     echo "12";
    // case 13:
    //     echo "13";
    // case 14:
    //     echo "14";
    // case 15:
    //     echo "15";
	// 	break;
    // }
    
    
    // №3
    function sum($arg1, $arg2) {
        return $arg1 + $arg2;
    }
    
    function subtraction($arg1, $arg2) {
        return $arg1 - $arg2;
    }
    
    function multiply($arg1, $arg2) {
        return $arg1 * $arg2;
    }

    function divide($arg1, $arg2) {
        return ($arg2 === 0) ? "не дели на ноль" : $arg1 / $arg2;
    }
    echo divide(4, 2);
?>