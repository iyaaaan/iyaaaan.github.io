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


	<div class="container-fluid padding-y">
		<h2 class="title">My Projects</h2>
		<div class="text-center">
			<p>These are some of the projects that I'm working with. I'm looking forward to add more to my collection.</p>
		</div>

		<div class="projects">
			<div class="projects__item">
				<img src="img/artine.png" class="projects__img" alt="Artine Photography">
			</div>
			<div class="projects__item">
				<div class="projects__text">
					<h2 class="projects__title">Artine Photography</h2>
					<div class="p">This is a photography website with gallery and filtering.</div>
				</div>
			</div>
			<div class="projects__item">
				<div class="projects__text">
					<h2 class="projects__title">Surf Website</h2>
					<div class="p">A landing page of a resort that promotes its white sand beach.</div>
				</div>
			</div>
			<div class="projects__item">
				<img src="img/surf.png" class="projects__img" alt="Surf Website">
			</div>
		</div>
	</div>


	<?php include("include-footer.php") ?>




	<script src="js/jquery.min.js"></script>
	<script src="js/font-awesome.min.js"></script>
	<script src="js/main.js"></script>

	<!-- navbar active state -->
	<script>
		$(document).ready(function() {
			$('.navbar__link:eq(1)').addClass('is-active');
		});

	</script>


</body>

</html>
