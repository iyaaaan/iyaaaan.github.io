<?php
	if(isset($_POST['submit'])) {
		$to = "christianocol12@gmail.com";
         $subject = $_POST['name'];
         $from = $_POST['email'];
         $number = $_POST['number'];
		$message = "Hello";
         $headers = "From: ".$from."";

         $send = mail($to,$subject,$message,$headers);

         $success ="Message sent successfully! We'll connect with you as soon as possible. Thank you!!";
         $error ="Sorry, message could not be sent. Please try again later.";
		
		$location = $_SERVER['HTTP_REFERER'];

         if($send == true) {
		    echo "<script>
alert('Message send successfully! We will connect with you as soon as possible. Thank you!!');

</script>";
		    exit;
         }
		else {
           echo "<script>alert('$error');</script>";
			exit;
         }  
		
	}
         
?>


<?php
	if(isset($_POST['submit'])) {
		$to = "christianocol12@gmail.com";
         $subject = $_POST['name'];
         $from = $_POST['email'];
         $number = $_POST['number'];
//         $message = "".$_POST['message']."\n\n Contact Number: ".$number."\n\n E-mail: ".$from.""; 
		$message = "Hello";
         $headers = "From: ".$from."";

         $send = mail($to,$subject,$message,$headers);

         $success ="Message sent successfully! We'll connect with you as soon as possible. Thank you!!";
         $error ="Sorry, message could not be sent. Please try again later.";
		
		$location = $_SERVER['HTTP_REFERER'];

         if($send == true) {
//		  header('Location: ' . $_SERVER['HTTP_REFERER']);
//          echo '<script type="text/javascript">alert("Message´s 1st line\nMessage´s 2nd line");</script>';
		    echo "<script>
alert('Message send successfully! We will connect with you as soon as possible. Thank you!!');
window.location.href='$location';
</script>";
		    exit;
         }
		else {
           echo "<script>alert('$error');</script>";
//			  header("Location: index.php");
			exit;
         }  
		
	}
         
?>

<?php
	if(isset($_POST['submit'])) {
		$to = "christianocol12@gmail.com";
         $subject = $_POST['name'];
         $from = $_POST['email'];
         $number = $_POST['number'];
         $event = $_POST['event'];
         $date = $_POST['date'];
         $venue = $_POST['venue'];
         $message = "".$_POST['message']."\n\n Contact Number: ".$number."\n\n E-mail: ".$from."\n\n Event: ".$event."\n\n Date: ".$date."\n\n Venue: ".$venue."";
         $headers = "From: ".$from."";

         $send = mail($to,$subject,$message,$headers);

         $success ="Message sent successfully! We'll connect with you as soon as possible. Thank you!!";
         $error ="Sorry, message could not be sent. Please try again later.";
		
		$location = $_SERVER['HTTP_REFERER'];

         if($send == true) {
//		  header('Location: ' . $_SERVER['HTTP_REFERER']);
//          echo '<script type="text/javascript">alert("Message´s 1st line\nMessage´s 2nd line");</script>';
		    echo "<script>
alert('Message send successfully! We will connect with you as soon as possible. Thank you!!');
window.location.href='$location';
</script>";
		    exit;
         }
		else {
           echo "<script>alert('$error');</script>";
			  header("Location: index.php");
			exit;
         }  
		
	}
         
?>
$_POST['number']."\n\n Event: ".$event."\n Date: ".$date."\n Venue: ".$venue."\n\n Contact Number: ".$number."\n Email: ".$email;

$messageVal = "$message \n\n <strong>Event: </strong> $event \n <strong>Date: </strong> $date \n <strong>Venue: </strong> $venue \n\n <strong>Contact Number: </strong> $number \n <strong>Email: </strong> $from";

"".$_POST['message']."\n\n Contact Number: ".$number."\n\n E-mail: ".$from.""
