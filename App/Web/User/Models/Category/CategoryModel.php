<?php

namespace App\Web\User\Models\Category;

use App\Web\User\Models\AppModel;

class CategoryModel extends AppModel
{
	private $nestedTree;
	private $data;

	public function __constuct()
	{
		$this->nestedTree = $this->getNestedTree();
		$this->data = $this->createHTML()
	}

	private function getNestedTree()
	{
		$nestedTree = new CategoryNestedTree;
		$data = $nestedTree->getNestedTree();
		return $data;
	}

	private function createHTML()
	{
		
	}

	public function getData()
	{
		return $this->data;
	}
}
