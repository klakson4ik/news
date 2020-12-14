<?php
	
namespace App\Web\User\Models\Category;

class CategoryTemplate
{
	private $nestedTree;
	private $level = ['first', 'second', 'other'];
	private $html;
	private $tpl = '/var/www/App/Web/User/Views/Pages/Category/index.php';
	private $count = -1;
	private $levelSize;

	public function __construct($data)
	{
		  $this->levelSize = (count($this->level)) - 1;
		$this->nestedTree = $data;
		$this->html = $this->createHtml();
	}
	
	private function createHtml()
	{
		$html = '';
		foreach($this->nestedTree as $branch)
		{
			$html .= $this->createBranch($branch);
		}

		return $html;
	}


   private function createBranch($branch)
   {
		  if($this->count != $this->levelSize)
					 ++$this->count;
		  require $this->tpl;
		  if($this->count > -1)
					 --$this->count;
   }

	public function getHtml()
	{
		  return $this->html;		
	}
}
