<?php $className = 'category-' . $this->level[$this->count] . '-level-';?>


<ul class="<?php echo $className ;?>head">
	<li class="<?php echo $className ;?>element">
		  <h3 class="<?php echo $className ;?>text">
					 <?php echo $branch['name']; ?>
		  </h3>
		  <?php if(isset($branch['children'])): 
					 foreach ($branch['children'] as $element)
								$this->createBranch($element);
		  endif; ?>
	</li>
</ul>
