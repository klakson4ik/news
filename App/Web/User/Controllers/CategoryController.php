<?php

namespace App\Web\User\Controllers;

use App\Web\User\Models\Category\CategoryModel;

class CategoryController
{
	public static function index()
	{
		$data = CategoryModel::getData();
		return $data;
	}
}
