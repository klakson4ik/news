<?php

namespace App\Web\User\Models\Category;

use App\Web\User\Models\AppModel;

class CategoryModel extends AppModel
{
	private $nestedTree;
	private $data;

	public function __construct()
	{
		$this->nestedTree = $this->getNestedTree();
		$this->data = $this->createHtml();
	}

	private function getNestedTree()
	{
		  $nestedTree = new CategoryNestedTree;
		  return $nestedTree->getNestedTree();
 
	}

	private function createHtml()
	{
		  $template = new CategoryTemplate($this->nestedTree);
		  return $template->getHtml();
	}

	public function getData()
	{
		return $this->data;
	}
}
