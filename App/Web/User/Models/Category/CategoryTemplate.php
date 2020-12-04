<?php
	
namespace App/Web/User/Models/Category;

class CategoryTemplate
{
	private $nestedTree;
	private $level = [1 => 'first', 2 => 'second', 3 => 'other'];
	private $html;
	private $tpl = USER . PAGE . '/Category/index.php';

	public function __construct($data)
	{
		$this->nestedTree = $data;
		$this->HTML = createHtml();
	}
	
	private function createHtml()
	{
		$html = '';
		foreach($this->nestedTree as $branch)
		{
			$html .= $this->nestedBranch($branch, $this->level[1])
		}
	}


   private function createBranch($category, $level)
   {
   	ob_start();
   	require $this->tpl;
   	return ob_get_clean();
   }
}
