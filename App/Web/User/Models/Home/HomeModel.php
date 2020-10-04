<?php

namespace App\Web\User\Models\Home;

use App\Web\User\Models\AppModel;

class HomeModel extends AppModel
{
	public static function getData()
	{
		$data = DBModel::getDataDB()	
	}
}
