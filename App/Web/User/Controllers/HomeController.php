<?php

namespace App\Web\User\Controllers;
use App\Web\User\Controllers\AppController;
use App\Web\User\Models\Home\MainModel;

class HomeController extends AppController
{
	public function index()
	{
		$data = HomeModel::getData();
		$title = '';
		$keywords = '';
		$description = '';
		$this->setMeta($title, $keywords, $description);
		$this->setData($data);
	}
}
