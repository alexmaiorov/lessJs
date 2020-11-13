<?php
$a=10;
$b=5;
list($a,$b)=[$b,$a];
echo $a,' ',$b;
if ($a>0 and $b>0){
    echo $a-$b;
}
else if($a<0 && $b<0){
    echo $a*$b;
}
else echo $a+$b;

$c=rand(0,15);
switch ($c) {
    case 0:
        echo $c++;
    case 1:
        echo $c++;
    case 2:
        echo $c++;
    case 3:
        echo $c++;
    case 4:
        echo $c++; 
    case 5:
        echo $c++;   
    case 6:
        echo $c++; 
    case 7:
        echo $c++;  
    case 8:
        echo $c++;  
    case 9:
        echo $c++;  
    case 10:
        echo $c++;  
    case 11:
        echo $c++;  
    case 12:
        echo $c++;  
    case 13:
        echo $c++; 
    case 14:
        echo $c++;  
    case 15:
        echo $c++;  
    break;
    default: 
    console.log('wrong number');  
}

?>
