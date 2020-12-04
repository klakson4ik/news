<?php $className = 'category-' . $level . '-level-';?>

<ul class="<?php echo $className ;?>head">
	<li class="<?php echo $className ;?>element">
		<?php foreach ($category as $element) :?>
			<h1 class="<?php echo $className ;?>text">
				<?php echo $element['name'] ;?>
			</h1>
			<?php if(isset($element['children'])):
				
			endif; 
		endforeach ;?>
	</li>
</ul>
