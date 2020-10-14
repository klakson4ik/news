<!doctype html>

<html lang="en">
<head>	
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
	<?= $this->getMeta(); ?>	
	<link rel="stylesheet" type="text/css" href="css/index.css">
</head>

<body>

	<header>
		<?php require_once USER . PARTIALS . '/default/header.php' ;?>	
	</header>

	<div class="content">
   	<?=$content; ?>
	</div>

	<footer>
		<?php require_once USER . PARTIALS . '/default/footer.php' ;?>	
	</footer>

</body>
</html>
