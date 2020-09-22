<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<title>Kristyan</title>

	<meta content="width=device-width, initial-scale=1.0" name="viewport" />

	<link rel="stylesheet" href="css/main.css">
	<link rel="stylesheet" href="css/font-awesome.css">

</head>

<body>

	<!-- includes navigation bar -->
	<?php include('include-navbar.php'); ?>

	<div class="hero" id="moveBg">
		<div class="hero__caption-wrap">
			<h1 class="hero__caption">Hello, I'm Christian!</h1>
			<h5 class="hero__sub-caption"><code>I love designing
					websites</code> </h5>
		</div>
	</div>



	<script src="js/jquery.min.js"></script>
	<script src="js/font-awesome.min.js"></script>
	<script src="js/main.js"></script>


	<!-- navbar active state -->
	<script>
		$(document).ready(function() {
			$('.navbar__logo').addClass('is-active');
		});

	</script>


</body>

</html>
