<ul class="category-second-level-head">
	<li class="category-second-level-element">
		<?php foreach ($category as $element) :?>
			<h1 class="category-second-level-text">
				<?php echo $element['name'] ;?>
			</h1>
			<?php if(isset($element['children'])):
				require_once USER . PAGES . '/Category/restLevel.php';
			endif; 
		endforeach ;?>
	</li>
</ul>
