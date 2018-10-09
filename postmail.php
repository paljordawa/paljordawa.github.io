
<?php
/*
$messagebody=<<<EMAIL  
            $message;      
EMAIL;                  

$header="From:$email";
if($_POST){
    if($name == '' || $email == '' || $subject =='' || $message == ''){
        echo 'Error.. Please fill all the forms';
      
    }else{
    mail($to,$subject,$messagebody,$header);
    echo 'Thank you for the mail';
       
    };
};

*/


$to="paljordawa@gmail.com";

$name=$_POST["name"];
$email=$_POST["email"];
$subject=$_POST["subject"];
$message=$_POST["message"];

    if($_POST){
    if($name == ''|| $email==''||$subject==''||$message==''){
        
        echo 'Error.. Please fill all the forms';
    }
        else{
            $header="FROM:$email";
            mail($to,$subject,$message,$header);
            echo 'Thank you for the mail';     
        };
};


?>
