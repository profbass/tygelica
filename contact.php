<?php
    $to = "thepolens@booj.com"; 
    //$from = $_REQUEST['emailInput']; 
    $from = 'tygelica';
    $name = $_REQUEST['nameInput']; 
    $headers = "From: $from"; 
    $subject = "Tygelica Wedding Guest"; 
    $fields = array(); 
    $fields{"name"} = 'Name: '.$_REQUEST['nameInput']; 
    $fields{"email"} = 'Email: '.$_REQUEST['emailInput']; 
    $fields{"diet"} = 'Diet: '.$_REQUEST['dietInput']; 
    $fields{"attend"} = 'Attending: '.$_REQUEST['attendInput'];

    //$body = "RSVP FOR ENCON 2016\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }
    $body = "Angelica, we have a new guest coming to our wedding! I am so excited to marry you <3\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s \n",$b,$_REQUEST[$a]); }
    $send = mail($to, $subject, $body, $headers);
?>