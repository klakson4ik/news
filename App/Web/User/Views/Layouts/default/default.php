<!doctype html>

<html lang="en">
<head>	
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
	<?= $this->getMeta(); ?>	
	<link rel="stylesheet" type="text/css" href="css/app.min.css">
</head>

<body class="wrapper">

	<header class="wrapper-header">
		<?php require_once USER . PARTIALS . '/default/header/header.php' ;?>	
	</header>

	<div class="wrapper-content">
   	<?=$content; ?>
	</div>

	<footer class="wrapper-footer">
		<?php require_once USER . PARTIALS . '/default/footer/footer.php' ;?>	
	</footer>

</body>
</html>
