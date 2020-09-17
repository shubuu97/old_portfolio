<?php
if(isset($_GET["name"]) && isset($_GET["email"]) && isset($_GET["subject"]) && isset($_GET["message"]))
{
   if(!empty($_GET["name"]) && !empty($_GET["email"]) &&!empty($_GET["subject"]) && !empty($_GET["message"]))
   {
    $to = "shubhamchitransh8@gmail.com";
    $subject = $_GET["subject"];
    
    $message = "
    <html>
        <head>
        <title>Contact Form</title>
        </head>
        <body>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                </tr>
                <tr>
                <td>".$_GET["name"]."</td>
                <td>".$_GET["email"]."</td>
                <td>".$_GET["message"]."</td>
                </tr>
            </table>
        </body>
    </html>
    ";
    
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From:'.$_GET["email"].'' . "\r\n";
    $headers .= 'Cc: shubhamchitransh97@gmail.com' . "\r\n";
    
    if(mail($to,$subject,$message,$headers)){
        echo 'Message sent successfully';
    }
   }
   else{
       echo 'All fields are required';
   }
}

?>