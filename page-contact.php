<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<title>Kristyan | About Me</title>

	<meta content="width=device-width, initial-scale=1.0" name="viewport" />

	<link rel="stylesheet" href="css/main.css">
	<link rel="stylesheet" href="css/font-awesome.css">

</head>

<body>

	<!-- includes navigation bar -->
	<?php include('include-navbar.php'); ?>


	<div class="contact">
		<h2 class="contact__title">Contact Me</h2>

		<div class="container contact__details padding-y">
			<div class="contact__details-item">
				<span class="contact__details-icon"><i class="fas fa-map-marker-alt"></i></span>

				<p class="">P-5 Brgy, Magang, Daet, Camarines Norte</p>
			</div>

			<div class="contact__details-item">
				<span class="contact__details-icon"><i class="fas fa-envelope"></i></span>
				<p class="">christianocol12@gmail.com</p>
			</div>

			<div class="contact__details-item">
				<span class="contact__details-icon"><i class="fas fa-mobile"></i></span>
				<p class="">+(63) 929- 8211- 353</p>
			</div>
		</div>

		<div class="contact__media">
			<div class="contact__media-item">
				<i class="fab fa-facebook-f" aria-hidden="true"></i>
				<span>facebook.com/christian.ocol</span>
			</div>

			<div class="contact__media-item">

				<i class="fab fa-instagram"></i> <span>instagram.com/iyaaaan__</span>

			</div>
		</div>


	</div>






	<script src="js/jquery.min.js"></script>
	<script src="js/font-awesome.min.js"></script>
	<script src="js/main.js"></script>

	<!-- navbar active state -->
	<script>
		$(document).ready(function() {
			$('.navbar__link:eq(2)').addClass('is-active');
		});

	</script>


</body>

</html>
