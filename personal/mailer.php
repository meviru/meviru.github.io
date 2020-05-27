<?php
    error_reporting(0);
    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
        $name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);
        $subject = trim($_POST["subject"]);

        // Check that data was sent to the mailer.
        if ( empty($name)  OR empty($message)  OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "hello@example.com";

        // Set the email subject.
        if(isset($subject) && $subject!=''){
            $subject = $subject;
        }else{
            $subject = "New contact from $name";
        }

        // Build the email content.
        $email_content  = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Message:\n$message\n";
        $email_headers  = "From: $name <$email>";

        include 'PHPMailer_5.2.0/class.phpmailer.php';

        try {   // Check if SMTP mail send

            // Server settings
            $mail = new PHPMailer();
            $mail->IsSMTP();                    // Set mailer to use SMTP
            $mail->CharSet = 'UTF-8';           // Charater set

            $mail->Host       = "email-smtp.us-west-2.amazonaws.com";  // SMTP server example
            $mail->SMTPDebug  = 0;              // enables SMTP debug information (for testing)
            $mail->SMTPAuth   = true;           // enable SMTP authentication
            $mail->Port       = 587;             // set the SMTP port for server
            $mail->Username   = "AKIAIWLMWPRONINAC4XQ";     // SMTP account username example
            $mail->Password   = "AqV+u7oI6SAjRiBqrthZH3PmlNoZxyt9pVBtsl2+QEHY";     // SMTP account password example
            $mail->SMTPSecure = 'tls';          // Enable TLS encryption, `ssl` also accepted

            //Recipients
            $mail->setFrom('dev@biztechconsultancy.com', 'Mailer');           // From mail id
            $mail->addAddress('developer1.test@gmail.com', 'Dev1');               // Add a recipient, Name is optional
            $mail->addReplyTo($email, 'Information');   // Reply to mail id

            //Content
            $mail->isHTML(true);                // Set email format to HTML
            $mail->Subject = $subject;          // Set subject of mail
            $mail->Body    = nl2br( $email_content );    // Set body of mail

            if ( $mail->send() ) {  // If mail send by SMTP successfully.
                echo "Thank You! Your message has been sent.";
            } else {

                ob_clean();
                if (@mail($recipient, $subject, $email_content, $email_headers)) {
                    // Set a 200 (okay) response code.
                    http_response_code(200);
                    echo "Thank You! Your message has been sent.";
                } else {
                    // Set a 500 (internal server error) response code.
                    http_response_code(500);
                    echo "Oops! Something went wrong and we couldn't send your message.";
                }
            }
        } catch (Exception $ex) {

            ob_clean();
            if (@mail($recipient, $subject, $email_content, $email_headers)) {
                // Set a 200 (okay) response code.
                http_response_code(200);
                echo "Thank You! Your message has been sent.";
            } else {
                // Set a 500 (internal server error) response code.
                http_response_code(500);
                echo "Oops! Something went wrong and we couldn't send your message.";
            }
        }
    } else {

        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>