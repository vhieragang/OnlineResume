<!Doctype html>
<html>
<head>
    <title>Message Sent!</title>
    <style>
        
    </style>
</head>
<body>
    <?php
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];
        $to = 'vhier.agang@gmail.com';
        //To, from, subject, message, Header
        //mail ($email, $subject, $name, 'From your Personal website!');
        mail($to, $subject, $message, 'Name: ' . "" . $name . "" . 'Email: ' . "" . $email);
    ?>
</body>
</html>
