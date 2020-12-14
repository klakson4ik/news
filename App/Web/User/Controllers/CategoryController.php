<?php

namespace App\Web\User\Controllers;

use App\Web\User\Models\Category\CategoryModel;

class CategoryController extends AppController 
{
	public static function index()
	{
		$categoryModel = new CategoryModel();
		$data = $categoryModel->getData();
		return $data;
	}
}
